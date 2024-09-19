import type { Load } from '@sveltejs/kit';
import type { PageData } from '../$types';

export const load: Load = async ({ fetch }) => {
  const res = await fetch('http://localhost:1337/posts');
  const posts = await res.json();

  
  return { props: { posts } };
};
