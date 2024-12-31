<script lang="ts">
    import type { AuthData } from "$lib/types";
    import { goto } from "$app/navigation";

    export let data: AuthData;

    function goToPage() {
        goto(`/auths/${data.data.auth}`)
    }


</script>

        <div on:click={() => goto(`/auths/${data.data.auth.id}`)}
            on:keydown={(event) => event.key === 'Enter' && goto(`/auths/${data.data.auth.id}`)}
             class="cursor-pointer" role="button" tabindex="0">
            
            <h2>{data.data.auth.username} ({data.data.auth.email})</h2>
            <p>{data.data.auth.description}</p>
        </div>
