import { cacheLife } from 'next/cache';
import { db } from '../../prisma/db';

export const getPosts = async () => {
  'use cache';
  cacheLife('days');

  const response = await db.orm.public.Post.all();
  return response.json();
};
