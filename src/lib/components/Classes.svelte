<script>
    import ColoredText from "./ColoredText.svelte";
    import Resists from "./Resists.svelte";
    import TraitItem from "./TraitItem.svelte";
    import WeaponItem from "./WeaponItem.svelte";
    import ArmorItem from "./ArmorItem.svelte";

    import {version, data} from "../../stores.js";
</script>

<div>
    <h2>Classes ({Object.keys($data.classes).length})</h2>

    <div class="grid -columns" style="--columns-count: 5;">
        {#each Object.entries($data.classes) as [key, race_class]}
            <div>
                <h5>[{key}] <ColoredText text={race_class.name} /></h5>
                <p>
                    <img src={`/${$version}/images/${race_class.icon}`} alt="" loading="lazy">
                    <img src={`/${$version}/images/${race_class.sprite}`} alt="" loading="lazy">
                    <br>
                    <strong>strength:</strong> {race_class.str}
                    <br>
                    <strong>dexterity:</strong> {race_class.dex}
                    <br>
                    <strong>willpower:</strong> {race_class.wil}
                    <br>
                    <strong>life:</strong> {race_class.life}
                    <br>
                    <strong>speed:</strong> {race_class.speed}
                    <br>
                    {#if (race_class.description !== "none")}
                        <ColoredText text={race_class.description} />
                    {:else}
                        {race_class.brief}
                    {/if}
                    <br>
                    <Resists item={race_class} />
                    <br>
                    <TraitItem key={race_class.trait} item={$data.traits_generic[race_class.trait]} />
                    <br>
                    {#if (race_class.weapon_main !== "none")}
                        <WeaponItem key={race_class.weapon_main} item={$data.weapons[race_class.weapon_main]} />
                        <br>
                    {/if}
                    {#if (race_class.weapon_off !== "none")}
                        <WeaponItem key={race_class.weapon_off} item={$data.weapons[race_class.weapon_off]} />
                        <br>
                    {/if}
                    {#if (race_class.armor_head !== "none")}
                        <ArmorItem key={race_class.armor_head} item={$data.armor[race_class.armor_head]} />
                        <br>
                    {/if}
                    {#if (race_class.armor_hand !== "none")}
                        <ArmorItem key={race_class.armor_hand} item={$data.armor[race_class.armor_hand]} />
                        <br>
                    {/if}
                    {#if (race_class.armor_chest !== "none")}
                        <ArmorItem key={race_class.armor_chest} item={$data.armor[race_class.armor_chest]} />
                        <br>
                    {/if}
                    {#if (race_class.armor_leg !== "none")}
                        <ArmorItem key={race_class.armor_leg} item={$data.armor[race_class.armor_leg]} />
                    {/if}
                </p>
            </div>
        {/each}
    </div>
</div>
