import type { Load } from '@sveltejs/kit';
import type { PageData } from '../$types';

export const load: Load = async ({ url, fetch }) => {
  const searchParams = new URLSearchParams(url.search);
  const start = parseInt(searchParams.get('_start') || '0', 10);
  const limit = parseInt(searchParams.get('_limit') || '10', 10);

  const res = await fetch(`http://localhost:1337/posts?_start=${start}&_limit=${limit}&_sort=id:desc`);
  const posts = await res.json();
  const totalCount = parseInt(res.headers.get('X-Total-Count') || '0', 10);
  const pageCount = Math.ceil(totalCount / limit);

  return { props: { posts, start, limit, pageCount } } satisfies PageData;
};
