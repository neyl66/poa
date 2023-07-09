<script>
    import ColoredText from "./ColoredText.svelte";
    import Resists from "./Resists.svelte";
    import TraitItem from "./TraitItem.svelte";
    import InvokeItem from "./InvokeItem.svelte";

    import {version, data} from "../../stores.js";
</script>

<div>
    <h2>Enemies ({Object.keys($data.enemies).length})</h2>

    <div class="grid -columns" style="--columns-count: 5;">
        {#each Object.entries($data.enemies) as [key, enemy]}
            <div>
                <h5>[{key}] <ColoredText text={enemy.name_color} /></h5>

                <p>
                    <img src={`/${$version}/images/${enemy.sprite}`} alt="" loading="lazy">
                    <br>
                    <strong>object_type:</strong> {enemy.object_type}
                    <br>
                    <strong>family:</strong> {enemy.family}
                    <br>
                    <strong>dmgtype:</strong> {enemy.dmgtype}
                    <br>
                    <Resists item={enemy} />
                    <br>
                    {#if (enemy.abilities.filter((ability) => ability !== "none").length > 0)}
                        <strong>abilities:</strong> <br>
                        {#each enemy.abilities.filter((ability) => ability !== "none") as ability}
                            <TraitItem key={ability} item={$data.traits_generic[ability]} />
                        {/each}
                    {/if}
                </p>
            </div>
        {/each}
    </div>
</div>
