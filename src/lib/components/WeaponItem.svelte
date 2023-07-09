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
<strong>class:</strong> {item.class}
<br>
<strong>type:</strong> {item.type}
<br>
<strong>shield:</strong> {item.shield}
<br>
<strong>type:</strong> {item.dmgtype}
<br>
<strong>accuracy:</strong> {item.acc * 10}
<br>
<strong>hit:</strong> {item.dmg * 10}
<br>
<strong>block:</strong> {item.arm}
<br>
<ColoredText text={item.description} />
<br>
{item.rumor}
<br>
<strong>encumbrance:</strong> {item.weight}
<br>
<strong>range:</strong> {item.range}
<br>
<strong>size:</strong> {item.size}
<br>
<strong>use:</strong> {item.use}
<br>
{#if (item.abilities.filter((ability) => ability !== "none").length > 0)}
    <strong>abilities:</strong> <br>
    {#each item.abilities.filter((ability) => ability !== "none") as ability}
        <TraitItem key={ability} item={$data.traits_generic[ability]} />
    {/each}
{/if}
<br>
<Resists {item} />
