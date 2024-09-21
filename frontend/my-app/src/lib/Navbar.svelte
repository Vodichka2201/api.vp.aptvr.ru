<script lang="ts">
  import { goto } from '$app/navigation';
  import user from '$lib/user';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';


  async function logout() {
  localStorage.removeItem("token");
  $user = null;
  goto("/login");
}

</script>
<Navbar color="purple">
    <NavBrand href="/">
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Статьи</span>
    </NavBrand>
    <NavHamburger  />
    <NavUl  >
      {#if !$user}
      <a href="/authreg" class="font-bold no-underline-4">Заявка в авторы</a>
      <NavLi href="/login">Вход</NavLi>
      {:else}
      <NavLi> 
        <form>
            <button class="logout" on:click={logout}>Выход</button> 
        </form>
      </NavLi>
      <NavLi href="/profile">
        <span>{$user.username}</span>
      </NavLi>
      <NavLi href="/new">Новая статья</NavLi>
      {/if}
    </NavUl>
  </Navbar>

 