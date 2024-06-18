// eslint-disable-next-line  @typescript-eslint/no-var-requires
require('dotenv').config();

export const dbConfig = {
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'bettingdb',
  host: process.env.DB_HOST || 'localhost',
  alter: process.env.DB_ALTER === 'true' || true,
  force: process.env.DB_FORCE === 'true' || false,
  port: parseInt(process.env.DB_PORT || '5432'),
  dialect: 'postgres',
};
