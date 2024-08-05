<script lang="ts">
    import type { PageData } from '../$types';
    import { goto } from '$app/navigation';

    export let data: PageData;
</script>

<h1>My Blog</h1>
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
      </div>
        {/each}
    </div>