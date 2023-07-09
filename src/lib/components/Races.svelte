<script>
    import ColoredText from "./ColoredText.svelte";
    import Resists from "./Resists.svelte";
    import TraitItem from "./TraitItem.svelte";

    import {version, data} from "../../stores.js";
</script>

<div>
    <h2>Races ({Object.keys($data.races).length})</h2>

    <div class="grid -columns" style="--columns-count: 5;">
        {#each Object.entries($data.races) as [key, race]}
            <div>
                <h5>[{key}] <ColoredText text={race.name} /></h5>
                <p>
                    <img src={`/${$version}/images/${race.icon}`} alt="" loading="lazy">
                    <img src={`/${$version}/images/${race.icon_small}`} alt="" loading="lazy">
                    <img src={`/${$version}/images/${race.sprite}`} alt="" loading="lazy">
                    <br>
                    <strong>strength:</strong> {race.str}
                    <br>
                    <strong>dexterity:</strong> {race.dex}
                    <br>
                    <strong>willpower:</strong> {race.wil}
                    <br>
                    <strong>life:</strong> {race.life}
                    <br>
                    <strong>speed:</strong> {race.speed}
                    <br>
                    {#if (race.description !== "none")}
                        <ColoredText text={race.description} />
                    {:else}
                        {race.brief}
                    {/if}
                    <br>
                    <Resists item={race} />
                    <br>
                    <TraitItem key={race.trait} item={$data.traits_generic[race.trait]} />
                </p>
            </div>
        {/each}
    </div>
</div>
