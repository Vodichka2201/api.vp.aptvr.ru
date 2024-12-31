import type { AuthData, Auth } from '$lib/types'
import type { Load } from '@sveltejs/kit';


export const load: Load = async ({params, fetch}) => {
    const res = await fetch(`http://localhost:1337/users/${params.id}`);
    const auth: Auth = await res.json()




    return {         
        data: {
            auth: {
                id: auth.id,
                email: auth.email,
                description: auth.description,
                username: auth.username
            }
        }
    } satisfies AuthData
}