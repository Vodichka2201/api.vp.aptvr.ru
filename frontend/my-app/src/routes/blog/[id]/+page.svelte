<script lang="ts">
    import type { PageData } from '$lib/types';
    import { goto } from '$app/navigation';
    import user from '$lib/user';
    import type { User } from '$lib/types';
    export let data: PageData;

    let currentUser: User | null = null;

    function goToPage(page: number) {
    goto(`/post/${data.data.post.id}?page=${page}`);
  }

    user.subscribe((u) => {
    currentUser = u;
  });

    let content = data.data.post.content;
    async function editPost() {
        goto(`/new?editId=${data.data.post.id}&title=${data.data.post.title}&description=${data.data.post.description}&content=${encodeURIComponent(data.data.post.content)}`);
    }

    async function deletePost() {
        if (!localStorage.getItem('token')) {
            goto('/login');
            return;
        }
        const res = await fetch(`http://localhost:1337/posts/${data.data.post.id}`, {
            method: 'DELETE',
            headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}
        });
        if (res.ok) {
            goto('/');
        } else {
                const data: { message: { messages: { message: string }[] }[] } = await res.json();
                if (data?.message?.[0]?.messages?.[0]?.message) {
                    alert(data.message[0].messages[0].message);
                }
            }
    }
  </script>
  
  <h1 class="text-center text-4xl mt-4">{data.data.post.title}</h1>
  <p class="text-center mt-2">By: {data.data.post.author?.username}</p>

      {#if $user && data.data.post.author?.id === $user.id}
          <p class="my-2 flex justify-center items-center gap-3">
              <button
                  class="bg-blue-500 text-white font-bold py-2 px-4 rounded border-transparent"
                  on:click={editPost}>Обновить</button>
              <button
                  class="bg-red-500 text-white font-bold py-2 px-4 rounded border-transparent"
                  on:click={deletePost}>Удалить</button>
          </p>
      {/if}
      <div class="border border-gray-500 my-4 mx-8 p-6 rounded">
          {@html content}
      </div>
