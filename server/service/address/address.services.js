const pool = require("../../config/conn");

class Address {
  static getAddress = async () => {
    const client = await pool.connect();

    try {
      const queryGetAddresses = `
      SELECT * FROM address;
      `;
      const result = await client.query(queryGetAddresses);
      return result.rows;
    } catch (error) {
      throw error;
    } finally {
      client.release();
    }
  };
}

module.exports = Address;
