    <!-- src/routes/__layout.svelte -->
    <script lang="ts">
        import '../app.css';
        import userStore from '$lib/user';
        import Navbar from "$lib/Navbar.svelte";
        import type { User } from '$lib/types';
        import { onMount } from 'svelte';
        import { afterUpdate } from 'svelte';
        let loading = true;
        onMount(async () => {
            // Check if 'token' exists in localStorage
            if (!localStorage.getItem('token')) {
                loading = false;
                return { props: { user: null } };
            }
            // Fetch the user from strapi
            const res = await fetch('http://localhost:1337/users/me', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            const user: User = await res.json();
            loading = false;
            if (res.ok) {
                $userStore = user;
            }
        });
        afterUpdate(async () => {
            const res = await fetch('http://localhost:1880/online', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });


        });
    </script>
    
<Navbar />
<slot />