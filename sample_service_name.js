const { Pool } = require('pg');

const pool = new Pool({
  host: "db",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432
});

module.exports = pool;

(async () => {
  try {
    const client = await pool.connect();
    const res = await client.query('SELECT NOW()');
    console.log('[DB Access Succeeded] Current Time:', res.rows[0]);
    client.release();
  } catch (err) {
    console.error('Error executing query', err.stack);
  } finally {
    pool.end();
  }
})();