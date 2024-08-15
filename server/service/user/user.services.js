const bcrypt = require("bcrypt");
const pool = require("../../config/conn");

class User {
  static getUsers = async () => {
    const client = await pool.connect();

    try {
      const queryGetUsers = `
      SELECT * FROM user;
      `;
      const result = await client.query(queryGetUsers);
      return result.rows;
    } catch (error) {
      throw error;
    } finally {
      client.release();
    }
  };

  static createUser = async ({
    firstName,
    middleName,
    lastName,
    email,
    password,
    phone,
    imageURL,
  }) => {
    if (!email || !password || !firstName || !lastName) {
      throw new Error(
        "First name, last name, email, and password are required!"
      );
    }

    const client = await pool.connect();

    try {
      await client.query("BEGIN");

      const queryText = `
      SELECT * FROM "user" WHERE email = $1
      `;
      const result = await client.query(queryText, [email]);

      if (result.rows.length > 0) {
        await client.query("ROLLBACK");
        return {
          status: 409,
          message: "An account with this email already exists.",
        };
      }

      const hashPassword = await bcrypt.hash(password, 10);

      const insertText = `
      INSERT INTO "user" (first_name, middle_name, last_name, email, password, phone, image_url) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING user_id
      `;
      const insertResult = await client.query(insertText, [
        firstName,
        middleName,
        lastName,
        email,
        hashPassword,
        phone,
        imageURL,
      ]);

      await client.query("COMMIT");

      if (insertResult.rowCount > 0) {
        return {
          status: 201,
          message: `New user ${firstName} ${lastName} created.`,
        };
      } else {
        throw new Error("Invalid user data received!");
      }
    } catch (error) {
      await client.query("ROLLBACK");
      throw new Error(
        "Internal Server Error (Creating user): " + error.message
      );
    } finally {
      client.release();
    }
  };
}

module.exports = User;
