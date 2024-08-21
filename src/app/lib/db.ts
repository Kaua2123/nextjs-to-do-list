import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  host: 'localhost',
  user: 'docker',
  password: 'docker',
  database: 'to-do-app',
  port: 5432,
});

export { pool };
