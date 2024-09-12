import type { Load } from '@sveltejs/kit';
import type { PageData } from '$lib/types';

export const load: Load = async ({ params, url, fetch }) => {
  const page = url.searchParams.get('page') || '1';
  const res = await fetch(`http://localhost:1337/posts/${params.id}`);
  const post = await res.json();

  return { data: { post } } satisfies PageData;
};




/**import type { Load } from '@sveltejs/kit';
import type { PageData } from '$lib/types';

export const load: Load = async ({ params, fetch }) => {
  const res = await fetch(`http://localhost:1337/posts/${params.id}`);
  if (res.status === 404) {
    const error = new Error('The post with ID was not found');
    return { status: 404, error };
  } else {
    const post = await res.json();
    return { data: { post } } satisfies PageData;
  }
};
 */
