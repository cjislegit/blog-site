import Link from 'next/link';
import { db } from '../../prisma/db';
import RecentlyViewedPosts from '../../components/recently-viewed-posts';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export default async function PostsPage() {
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await db.orm.public.Post.all();

  return (
    <div className='space-y-8'>
      <section className='space-y-4'>
        <h1 className='text-center text-4xl font-semibold text-zince-950 sm:text-5xl'>
          Posts
        </h1>

        <ul className='space-y-3'>
          {posts.slice(0, 5).map((post) => (
            <li key={post.id} className='rounded-lg border border-zinc-200 p-4'>
              <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
                <Link
                  href={`/posts/${post.id}`}
                  className='text-lg font-medium text-zinc-950'
                >
                  {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                </Link>
              </div>
            </li>
          ))}
        </ul>

        <Suspense fallback={<div>Loading recently viewed posts...</div>}>
          <RecentlyViewedPosts />
        </Suspense>
      </section>
    </div>
  );
}
