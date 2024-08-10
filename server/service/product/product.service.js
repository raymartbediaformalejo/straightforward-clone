// service/product/product.service.js
const pool = require("../../db/conn.js");

class Products {
  static getProducts = async () => {
    const client = await pool.connect();
    try {
      const query = `
        SELECT 
          p.product_id "productID", 
          p.product_name "productName", 
          COALESCE(json_agg(
            DISTINCT jsonb_build_object(
              'categoryID', c.category_id, 
              'categoryName', c.category_name,
              'parentCategoryID', c.parent_categ_id
            )
          ) FILTER (WHERE c.category_id IS NOT NULL), '[]') as category,
          COALESCE(json_agg(
            DISTINCT jsonb_build_object(
              'variationID', v.variation_id, 
              'variationName', v.variation_name,
              'size', (
                SELECT COALESCE(json_agg(
                  DISTINCT jsonb_build_object(
                    'sizeID', s.size_id, 
                    'sizeName', s.size_name,
                    'sizeValue', s.size_value
                  )
                ) FILTER (WHERE s.size_id IS NOT NULL), '[]')
                FROM variation_size vs
                LEFT JOIN size s ON vs.size_id = s.size_id
                WHERE vs.variation_id = v.variation_id
              )
            )
          ) FILTER (WHERE v.variation_id IS NOT NULL), '[]') as variation
        FROM products p
        LEFT JOIN product_category pc ON p.product_id = pc.product_id
        LEFT JOIN category c ON pc.category_id = c.category_id
        LEFT JOIN variation v ON p.product_id = v.product_id
        GROUP BY p.product_id;
      `;
      const result = await client.query(query);
      return result.rows;
    } catch (error) {
      throw error;
    } finally {
      client.release();
    }
  };

  static getProduct = async (productID) => {
    const client = await pool.connect();

    try {
      const query = `
      SELECT 
        p.product_id "productID",
        p.product_name "productName",
        COALESCE(json_agg(
          DISTINCT jsonb_build_object(
          'categoryID', c.category_id,
          'categoryName', c.category_name,
          'parentCategoryID', c.parent_categ_id
          )
        ) FILTER (WHERE c.category_id IS NOT NULL), '[]') as category,
        COALESCE(json_agg(
          DISTINCT jsonb_build_object(
            'variationID', v.variation_id,
            'variationName', v.variation_name,
            'size', (
              SELECT COALESCE(json_agg(
                DISTINCT jsonb_build_object(
                  'sizeID', s.size_id,
                  'sizeName', s.size_name,
                  'sizeValue', s.size_value
                )
              ) FILTER (WHERE s.size_id IS NOT NULL), '[]')
               FROM variation_size vs
               LEFT JOIN size s ON vs.size_id = s.size_id
               WHERE vs.variation_id = v.variation_id
            )
          )
        ) FILTER (WHERE v.variation_id IS NOT NULL), '[]') as variation
       FROM products p 
       LEFT JOIN product_category pc ON p.product_id = pc.product_id
       LEFT JOIN category c ON pc.category_id = c.category_id
       LEFT JOIN variation v ON p.product_id = v.product_id
       WHERE p.product_id = $1
       GROUP BY p.product_id`;

      const result = await client.query(query, [productID]);
      return result.rows;
    } catch (error) {
      throw error;
    } finally {
      client.release();
    }
  };

  static createProduct = async ({
    productName,
    price,
    categories,
    variations,
  }) => {
    const client = await pool.connect();

    try {
      await client.query("BEGIN");

      const insertProductQuery = `
        INSERT INTO products (product_name, price)
        VALUES ($1, $2)
        RETURNING product_id;
      `;

      const result = await client.query(insertProductQuery, [
        productName,
        price,
      ]);
      const productID = result.rows[0].product_id;

      const insertCategoryQuery = `
        INSERT INTO product_category (product_id, category_id)
        VALUES ($1, $2);
      `;

      for (const category of categories) {
        await client.query(insertCategoryQuery, [productID, category]);
      }

      for (const variation of variations) {
        const { variationName, variationValue, sizes = [] } = variation;

        const insertVariationQuery = `
          INSERT INTO variation (product_id, variation_name, variation_value)
          VALUES ($1, $2, $3)
          RETURNING variation_id;
        `;
        const variationResult = await client.query(insertVariationQuery, [
          productID,
          variationName,
          variationValue,
        ]);

        const variationID = variationResult.rows[0].variation_id;

        if (sizes.length) {
          const insertSizesQuery = `
            INSERT INTO variation_size (variation_id, size_id)
            SELECT $1, unnest($2::int[])
          `;

          await client.query(insertSizesQuery, [variationID, sizes]);
        }
      }

      await client.query("COMMIT");
      return { productID };
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally {
      client.release();
    }
  };

  static updateProduct = async ({
    productID,
    productName,
    price,
    categories,
    variations,
  }) => {
    const client = await pool.connect();

    try {
      await client.query("BEGIN");

      const updateProductQuery = `
      UPDATE products
      SET product_name = $1, price = $2
      WHERE product_id = $3
      `;

      await client.query(updateProductQuery, [productName, price, productID]);

      const currentCategoriesQuery = `
      SELECT category_id FROM product_category WHERE product_id = $1;
      `;

      const currentCategoriesResult = await client.query(
        currentCategoriesQuery,
        [productID]
      );

      const currentCategoryIDs = currentCategoriesResult.rows.map(
        (row) => row.category_id
      );

      const newCategories = categories.filter(
        (categoryID) => !currentCategoryIDs.includes(categoryID)
      );

      const insertCategoryQuery = `
      INSERT INTO product_category (product_id, category_id)
      VALUES ($1, $2);
      `;

      for (const categoryID of newCategories) {
        await client.query(insertCategoryQuery, [productID, categoryID]);
      }

      const removeCategories = currentCategoryIDs.filter(
        (categoryID) => !categories.includes(categoryID)
      );

      const removerCategoryQuery = `
      DELETE FROM product_category WHERE product_id = $1 AND category_id = $2;
      `;

      for (const category of removeCategories) {
        await client.query(removerCategoryQuery, [productID, category]);
      }

      const currentVariationQuery = `
      SELECT variation_id, variation_name, variation_value FROM variation WHERE product_id = $1;
      `;

      for (const variation of variations) {
        const {
          variationID,
          variationName,
          variationValue,
          sizes = [],
        } = variation;

        console.log(variationID);

        if (variationID) {
          const updateVariationQuery = `
          UPDATE variation
          SET variation_name = $1, variation_value = $2
          WHERE variation_id = $3;
          `;

          await client.query(updateVariationQuery, [
            variationName,
            variationValue,
            variationID,
          ]);

          const currentSizesQuery = `
          SELECT size_id FROM variation_size WHERE variation_id = $1;
          `;

          const currentSizesResult = await client.query(currentSizesQuery, [
            variationID,
          ]);

          const currentSizeIDs = currentSizesResult.rows.map(
            (row) => row.size_id
          );

          const newSizes = sizes.filter(
            (sizeID) => !currentSizeIDs.includes(sizeID)
          );
          const insertSizeQuery = `
          INSERT INTO variation_size (variation_id, size_id)
          VALUES ($1, $2);
          `;

          for (const sizeID of newSizes) {
            await client.query(insertSizeQuery, [variationID, sizeID]);
          }

          const removeSizes = currentSizeIDs.filter(
            (sizeID) => !sizes.includes(sizeID)
          );

          const deleteSizeQuery = `
          DELETE FROM variation_size WHERE variation_id = $1 AND size_id = $2;
          `;

          for (const sizeID of removeSizes) {
            await client.query(deleteSizeQuery, [variationID, sizeID]);
          }
        } else {
          const checkVariationQuery = `
          SELECT variation_id FROM variation
          WHERE variation_name = $1 AND product_id = $2;
          `;

          const checkVariationResult = await client.query(checkVariationQuery, [
            variationName,
            productID,
          ]);

          if (checkVariationResult.rows.length > 0) {
            throw new Error(
              `Variation name "${variationName}" already exist for this product.`
            );
          }

          const insertVariationQuery = `
          INSERT INTO variation (product_id, variation_name, variation_value)
          VALUES ($1, $2, $3)
          RETURNING variation_id;
          `;

          const variationResult = await client.query(insertVariationQuery, [
            productID,
            variationName,
            variationValue,
          ]);

          const newVariationID = variationResult.rows[0].variation_id;

          if (sizes.length) {
            const insertSizesQuery = `
            INSERT INTO variation_size (variation_id, size_id)
            SELECT $1, unnest($2::int[]);
            `;

            await client.query(insertSizesQuery, [newVariationID, sizes]);
          }
        }
      }

      await client.query("COMMIT");
      return { productID };
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally {
      client.release();
    }
  };

  static deleteProduct = async (productID) => {
    const client = await pool.connect();

    try {
      await client.query("BEGIN");

      const deleteVariationSizeQuery = `
      DELETE FROM variation_size
      WHERE variation_id IN (
        SELECT variation_id FROM variation WHERE product_id = $1
      );
      `;
      await client.query(deleteVariationSizeQuery, [productID]);

      const deleteVariationQuery = `
      DELETE FROM variation WHERE product_id = $1;
      `;
      await client.query(deleteVariationQuery, [productID]);

      const deleteProductCategoryQuery = `
      DELETE FROM product_category WHERE product_id = $1;
      `;
      await client.query(deleteProductCategoryQuery, [productID]);

      const deleteProductQuery = `
      DELETE FROM products WHERE product_id = $1;
      `;
      await client.query(deleteProductQuery, [productID]);

      await client.query("COMMIT");
      return { message: "Product deleted successfully ", productID };
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally {
      client.release();
    }
  };
}

module.exports = Products;
