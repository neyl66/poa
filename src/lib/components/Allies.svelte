<script>
    import ColoredText from "./ColoredText.svelte";
    import Resists from "./Resists.svelte";
    import TraitItem from "./TraitItem.svelte";
    import InvokeItem from "./InvokeItem.svelte";

    import {version, data} from "../../stores.js";
</script>

<div>
    <h2>Allies ({Object.keys($data.allies).length})</h2>

    <div class="grid -columns" style="--columns-count: 5;">
        {#each Object.entries($data.allies) as [key, ally]}
            <div>
                <h5>[{key}] <ColoredText text={ally.name_color} /></h5>

                <p>
                    <img src={`/${$version}/images/${ally.sprite}`} alt="" loading="lazy">
                    <br>
                    <strong>family:</strong> {ally.family}
                    <br>
                    <strong>dmgtype:</strong> {ally.dmgtype}
                    <br>
                    <Resists item={ally} />
                    <br>
                    {#if (ally.abilities.filter((ability) => ability !== "none").length > 0)}
                        <strong>abilities:</strong> <br>
                        {#each ally.abilities.filter((ability) => ability !== "none") as ability}
                            <TraitItem key={ability} item={$data.traits_generic[ability]} />
                        {/each}
                    {/if}
                </p>
            </div>
        {/each}
    </div>
</div>
