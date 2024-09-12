<script lang="ts">
  import { goto } from '$app/navigation';
  import user from '$lib/user';

  async function logout() {
  localStorage.removeItem("token");
  $user = null;
  goto("/login");
}

</script>
<nav class="bg-white border-b border-gray-500 py-2 px-4 w-full">
    <div class="flex items-center justify-between container mx-auto">
        <a href="/" class="font-bold no-underline">Статьи</a>
           <section>
            {#if !$user}
                <a href="/login" class="font-mono no-underline">Вход</a>
            {:else}
                <a href="/new" class="font-mono no-underline mr-3">Новая статья</a>
                <span class="font-mono text-gray-500">{$user.username}</span>
                <form class="font-mono no-underline mr-3">
                      <button class="logout" on:click={logout}>Выход</button>
                  </form>
            {/if}

        </section>
    </div>
 </nav>