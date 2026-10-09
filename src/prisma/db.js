import postgres from '@prisma/orm-postgres/runtime';
import contractJson from './contract.json';

export const db =
  globalThis.blogDb ??
  postgres({
    contractJson,
    url: process.env.DATABASE_URL,
  });

if (process.env.NODE_ENV !== 'production') {
  globalThis.blogDb = db;
}