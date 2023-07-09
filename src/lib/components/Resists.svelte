<script>
    export let item = {};

    $: resists = Object.entries(item).filter(([key, value]) => key.includes("resist") && value > 0);
</script>

{#if (resists.length > 0)}
    <strong>resists</strong>: <br>
    {#each resists as [key, value], index}
        - <strong>{key.replace("resist_", "")}:</strong> {value}%
        {#if (index < resists.length - 1)}
            <br>
        {/if}
    {/each}
{/if}
