<script lang="ts" context="module">
    import type { Post } from '$lib/types';
    import type { PageData } from '$lib/types';
</script>
<script lang="ts">
    import { onMount } from 'svelte';
    import user from '$lib/user';
    import { goto } from '$app/navigation';
    export let data: PageData;
    let editId: string;
    let title: string;
    let description: string;
    let content: string;

    onMount(() => {
        if (!$user) goto('/login');

        const urlParams = new URLSearchParams(window.location.search);
        editId = urlParams.get('editId') || '';
        title = urlParams.get('title') || '';
        description = urlParams.get('description') || '';
        content = decodeURIComponent(urlParams.get('content') || '');
    });

    async function editPost() {
        if (!localStorage.getItem('token')) {
            goto('/login');
            return;
        }

        if (data.data.post && editId) {
            const res = await fetch(`http://localhost:1337/posts/${editId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify({ title, description, content })
            });

            if (!res.ok) {
                const data: { message: { messages: { message: string }[] }[] } = await res.json();
                if (data?.message?.[0]?.messages?.[0]?.message) {
                    alert(data.message[0].messages[0].message);
                }
            } else {
                const updatedPost: Post = await res.json();
                goto('/blog/' + updatedPost.id);
            }
        } else {
            alert('Пост не найден');
        }
    }

    async function createPost() {
        if (!localStorage.getItem('token')) {
            goto('/login');
            return;
        }

        if (editId) {
            await editPost();
            return;
        }

        const res = await fetch('http://localhost:1337/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, content })
        });

        if (!res.ok) {
            const data: { message: { messages: { message: string }[] }[] } = await res.json();
            if (data?.message?.[0]?.messages?.[0]?.message) {
                alert(data.message[0].messages[0].message);
            }
        } else {
            const newPost: Post = await res.json();
            goto('/blog/' + newPost.id);
        }
    }
</script>

    <form on:submit|preventDefault={createPost} class="my-4 mx-auto container p-4">
        <div class="my-1">
            <label for="title">Title</label>
            <input type="text" placeholder="Enter title" id="title" bind:value={title} />
        </div>
        <div class="my-1">
            <label for="description">Description</label>
            <input type="text" placeholder="Enter description" id="description" bind:value={description} />
        </div>
        <div class="my-1">
            <label for="title">Content</label>
            <textarea rows={5} placeholder="Enter content" id="content" bind:value={content} />
        </div>
        <div class="my-2">
            <button class="submit" type="submit">Submit</button>
        </div>
    </form>
    <style lang="postcss">
        label {
            @apply font-bold block mb-1;
        }
        input {
            @apply bg-white w-full border border-gray-500 rounded outline-none py-2 px-4;
        }
        textarea {
            @apply bg-white w-full border border-gray-500 rounded outline-none py-2 px-4 resize-y;
        }
        .submit {
            @apply bg-blue-500 text-white border-transparent rounded px-4 py-2;
        }
    </style>