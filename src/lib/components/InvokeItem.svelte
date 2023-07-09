<script>
    import ColoredText from "./ColoredText.svelte";

    import {version, data} from "../../stores.js";

    export let item = {};
    export let key = "";
</script>

<h5>[{key}] <ColoredText text={item.name} /></h5>

<img src={`/${$version}/images/${item.sprite}`} alt="" loading="lazy">
<br>
<strong>use_starting:</strong> {item.use_starting}
<br>
<strong>use_max:</strong> {item.use_max}
<br>
<strong>use:</strong> {item.use}
<br>
<strong>use_gain:</strong> {item.use_gain}
<br>
<strong>use_recharge_type:</strong> {item.use_recharge_type}
<br>
{#if (item.use_lose !== "none")}
    <strong>use_lose:</strong> {item.use_lose}
    <br>
{/if}
<ColoredText text={item.description_short} />
