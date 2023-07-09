<script>
    import ColoredText from "./ColoredText.svelte";
    import Resists from "./Resists.svelte";

    import {version} from "../../stores.js";

    export let item = {};
    export let key = "";
</script>

<h5>[{key}] <ColoredText text={item.Name} /></h5>

<img src={`/${$version}/images/${item.sprite}`} alt="" loading="lazy">
<br>

{#if (item.Element !== "None")}
    <strong>element:</strong> {item.Element}
    <br>
{/if}

<strong>cost:</strong> {item.cost}
<br>

{#if (item.reference !== "none")}
    <strong>reference:</strong> {item.reference}
    <br>
{/if}

<strong>generic:</strong> {item.generic}
<br>
{#if (item?.ready)}
    <strong>ready:</strong> {item.ready}
    <br>
{/if}

{#if (item?.organize)}
    <strong>organize:</strong> {item.organize}
    <br>
{/if}

<ColoredText text={item.Description} />
<br>
<Resists {item} />
