import type { Post, PageData } from '$lib/types';
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ url, fetch }) => {
    const editId = url.searchParams.get('editId');
    if (editId) {
        const res = await fetch(`http://localhost:1337/posts/${editId}`);
        if (res.status === 404) {
            const error = new Error(`The post with ID ${editId} was not found`);
            return { status: 404, error };
        } else {
            const data: Post = await res.json();
            return {
                props: {
                    editId,
                    title: data.title,
                    description: data.description,
                    content: data.content
                }
            };
        }
    }
    return { props: {} };
};
