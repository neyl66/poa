<script>
    import ColoredText from "./ColoredText.svelte";

    import {version, data} from "../../stores.js";
</script>

<div>
    <h2>Buffs ({Object.keys($data.buffs).length})</h2>

    <div class="grid -columns" style="--columns-count: 5;">
        {#each Object.entries($data.buffs) as [key, buff]}
            <div>
                <h5>[{key}] <ColoredText text={`${buff.color}${buff.name}[/color]`} /></h5>
                <p>
                    <img src={`/${$version}/images/${buff.icon}`} alt="" loading="lazy">
                    <br>
                    <strong>element:</strong> {buff.element}
                    <br>
                    <strong>duration:</strong> {buff.duration}
                    <br>
                    <strong>harmful:</strong> {buff.harmful}
                    <br>
                    {#if (buff.formsprite !== "none")}
                        <strong>formsprite:</strong> <img src={`/${$version}/images/${buff.formsprite}`} alt="" loading="lazy">
                        <br>
                    {/if}
                    <ColoredText text={buff.description} />
                </p>
            </div>
        {/each}
    </div>
</div>
