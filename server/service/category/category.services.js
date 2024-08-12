const pool = require("../../config/conn");

class Category {
  static getCategories = async () => {
    const client = await pool.connect();

    try {
      const queryGetCategories = `
      SELECT * FROM category;
      `;
      const result = await client.query(queryGetCategories);
      return result.rows;
    } catch (error) {
      throw error;
    } finally {
      client.release();
    }
  };
}

module.exports = Category;
