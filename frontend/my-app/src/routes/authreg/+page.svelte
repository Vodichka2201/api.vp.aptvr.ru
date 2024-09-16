<script lang="ts">
    import type { User } from '$lib/types';
    import { goto } from '$app/navigation';
    import user from '$lib/user';
    let email = '';
    let name = '';
    async function request() {
        const params = new URLSearchParams({ name, email });
        const res = await fetch(`http://localhost:1880/new-auth?${params.toString()}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
        });
        if (res.ok) {
            const data: {user: User, jwt: string} = await res.json();
            if (data) {
                alert("Мы рассмотрим вашу заявку");
                goto('/');
            }
        }
    }
  </script>
  <form on:submit|preventDefault={request} class="container mx-auto my-4">
    <h1 class="text-center text-2xl font-bold">Заявка в авторы</h1>
    <div class="my-1">
        <label for="name">Имя</label>
        <input type="name" placeholder="Введите ваше имя" bind:value={name} />
    </div>
    <div class="my-1">
        <label for="email">Почта</label>
        <input type="email" placeholder="Введите вашу почту" bind:value={email} />
    </div> 
    <div class="my-3">
        <button class="submit" type="submit">Подать заявку</button>
    </div>
  </form>
  <style lang="postcss">
    label {
        @apply font-bold block mb-1;
    }
    input {
        @apply bg-white w-full border border-gray-500 rounded outline-none py-2 px-4;
    }
    .submit {
        @apply bg-blue-500 text-white border-transparent rounded px-4 py-2;
    }
  </style>