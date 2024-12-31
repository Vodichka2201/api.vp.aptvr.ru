import type { Load } from '@sveltejs/kit';
import type { PageData, Post } from '../$types'; 

export const load: Load = async ({ url, fetch }) => {
  const searchParams = new URLSearchParams(url.search);
  const start = parseInt(searchParams.get('_start') || '0', 10);
  const limit = parseInt(searchParams.get('_limit') || '10', 10);

  const res = await fetch(`http://localhost:1337/posts?_start=${start}&_limit=${limit}&_sort=id:desc`);
  const postsData: Post[] = await res.json(); 

  const posts: Post[] = postsData.map(post => ({
    id: post.id,
    title: post.title,
    description: post.description,
    content: post.content,
    author: post.author ? {
      id: post.author.id,
      email: post.author.email,
      username: post.author.username,
    } : null,
    created_at: post.created_at,
    updated_at: post.updated_at,
    Slug: post.Slug, 
  }));

  const totalCount = parseInt(res.headers.get('X-Total-Count') || '0', 10);
  const pageCount = Math.ceil(totalCount / limit);

  return {
    props: {
      posts,
      start,
      limit,
      pageCount,
    },
  };
};