/** @param {import('@sveltejs/kit').RequestEvent} event */
export async function GET(event) {
    const { fetch } = event;
    const res = await fetch('http://localhost:1337/api/posts?populate=*');
    const data = await res.json();
    return { body: data };
}
