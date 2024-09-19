    <!-- src/routes/__layout.svelte -->
    <script lang="ts">
        import '../app.css';
        import userStore from '$lib/user';
        import Navbar from "$lib/Navbar.svelte";
        import type { User } from '$lib/types';
        import { onMount, onDestroy } from 'svelte';
        import { afterUpdate } from 'svelte';
        import user from '$lib/user';
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



        async function get_online() {
  if ($user) {
    const params = new URLSearchParams({ username: $user.username, userid: $user.id });
    const onl = await fetch(`http://localhost:1880/online?${params}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
    });
    const data = await onl.json();
    console.log(data);
  } else {
    console.log('$user is null or undefined');
  }
}

        
        let intervalId: number;
        onMount(() => {
            intervalId = setInterval(get_online, 5000);
        });

        onDestroy(() => {
            clearInterval(intervalId);
        });



        
    </script>
    
<Navbar />
<slot />