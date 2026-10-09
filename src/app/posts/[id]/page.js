import { db } from '../../../prisma/db';
import { notFound } from 'next/navigation';

export default async function PostPage({ params }) {
  const { id } = await params;
  const postId = Number(id); //Turns it into a number instead of a string

  if (!Number.isSafeInteger(postId) || postId < 1) {
    notFound();
  }

  const post = await db.orm.public.Post.first({ id: postId });

  if (!post.id) {
    notFound();
  }

  return (
    <article className='space-y6'>
      <div className='space-y-4'>
        <h1 className='text-center text-4xl font-semibold text-zinc-950 sm:text-5xl'>
          {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
        </h1>
        <p className='text-lg leading-8 text-zinc-700'>{post.body}</p>
      </div>
    </article>
  );
}
