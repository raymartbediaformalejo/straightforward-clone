const pool = require("../../config/conn");

class Variation {
  static getVariations = async () => {
    const client = await pool.connect();

    try {
      const queryGetVariatoins = `
      SELECT * FROM variation;
      `;
      const result = await client.query(queryGetVariatoins);
      return result.rows;
    } catch (error) {
      throw error;
    } finally {
      client.release();
    }
  };
}

module.exports = Variation;
