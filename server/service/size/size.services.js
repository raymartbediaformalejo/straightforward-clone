const pool = require("../../config/conn");

class Size {
  static getSizes = async () => {
    const client = await pool.connect();

    try {
      const queryGetSizes = `
      SELECT * FROM size;
      `;
      const result = await client.query(queryGetSizes);
      return result.rows;
    } catch (error) {
      throw error;
    } finally {
      client.release();
    }
  };
}

module.exports = Size;
