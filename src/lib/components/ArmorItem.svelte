<script>
    import ColoredText from "./ColoredText.svelte";
    import Resists from "./Resists.svelte";
    import TraitItem from "./TraitItem.svelte";

    import {version, data} from "../../stores.js";

    export let item = {};
    export let key = "";
</script>

<h5>[{key}] <ColoredText text={item.name} /></h5>

<img src={`/${$version}/images/${item.icon}`} alt="" loading="lazy">
<img src={`/${$version}/images/${item.sprite}`} alt="" loading="lazy">
<br>
<strong>armor:</strong> {item.arm}
<br>
<strong>encumbrance:</strong> {item.weight}
<br>
<strong>inflexibility:</strong> {item.inflex}
<br>
<strong>class:</strong> {item.class}
<br>
<strong>position:</strong> {item.position}
<br>
{item.rumor}
<br>
{#if (item.abilities.filter((ability) => ability !== "none").length > 0)}
    <strong>abilities:</strong> <br>
    {#each item.abilities.filter((ability) => ability !== "none") as ability}
        <TraitItem key={ability} item={$data.traits_generic[ability]} />
    {/each}
{/if}
<strong>rarity:</strong> {item.rarity}
<br>
<Resists item={item} />
