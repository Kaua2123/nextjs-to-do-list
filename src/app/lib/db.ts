import pg from 'pg';

const { Pool } = pg;
const pool =
  process.env.NODE_ENV !== 'production' &&
  new Pool({
    host: 'localhost',
    user: 'docker',
    password: 'docker',
    database: 'to-do-app',
    port: 5432,
  });

export { pool };
