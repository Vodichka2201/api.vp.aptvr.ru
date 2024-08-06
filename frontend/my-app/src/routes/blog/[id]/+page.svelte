<script lang="ts">
    import type { PageData } from '$lib/types';
    export let data: PageData;
  </script>
  
  <h1 class="text-center text-4xl mt-4">{data.data.post.title}</h1>
  <p>{data.data.post.description}</p>
  <p>{data.data.post.content}</p>
  