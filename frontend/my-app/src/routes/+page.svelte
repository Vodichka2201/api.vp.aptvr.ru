<script lang="ts">
    import type { PageData } from '../$types';
    import { goto } from '$app/navigation';

    export let data: PageData;
</script>
<div class="my-4">
  <h1 class="text-center text-3xl font-bold">Статьи</h1>
</div>

<div class="container mx-auto mt-4">
  {#each data.props.posts as post (post.id)}
    <div
      class="hover:bg-gray-200 cursor-pointer px-6 py-2 border-b border-gray-500"
      on:click={() => goto('/blog/' + post.id)}
      on:keydown={(event) => event.key === 'Enter' && goto('/blog/' + post.id)}
      role="button"
      tabindex="0"
    >
      <h4 class="font-bold">{post.title}</h4>
      <p class="mt-2 text-gray-800">{post.description}</p>
      <p class="text-gray-500">
        {#if post.author?.username}
          By: {post.author.username}
        {:else}
          By: Unknown
        {/if}
      </p>
    </div>
  {/each}
</div>

<div class="container mx-auto mt-4 flex flex-col items-center">

<div class="flex flex-col items-center">
  <!-- Help text -->
  <span class="text-sm text-gray-700 dark:text-gray-400">
    С <span class="font-semibold text-gray-900 dark:text-white">{data.props.start}</span> по <span class="font-semibold text-gray-900 dark:text-white">{data.props.start + data.props.limit}</span>
</span>
  <div class="inline-flex mt-2 xs:mt-0">
    <!-- Buttons -->
     {#if data.props.start > 0}
    <a href="?_start={data.props.start - data.props.limit}&_limit={data.props.limit}" class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <svg class="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
        </svg>
        Назад
      </a>
      {:else}
      <a href="/" class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <svg class="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
        </svg>
        Назад
      </a>
      {/if}
    <a href="?_start={data.props.start + data.props.limit}&_limit={data.props.limit}" class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        Вперёд
        <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </a>
  </div>
</div>

</div>