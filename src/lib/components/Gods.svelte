<script>
    import ColoredText from "./ColoredText.svelte";
    import Resists from "./Resists.svelte";
    import TraitItem from "./TraitItem.svelte";
    import InvokeItem from "./InvokeItem.svelte";

    import {version, data} from "../../stores.js";
</script>

<div>
    <h2>Gods ({Object.keys($data.gods).length})</h2>

    <div class="grid -columns" style="--columns-count: 5;">
        {#each Object.entries($data.gods) as [key, god]}
            <div>
                <h5>[{key}] <ColoredText text={god.name} /></h5>
                <p>
                    <img src={`/${$version}/images/${god.icon}`} alt="" loading="lazy">
                    <img src={`/${$version}/images/${god.sprite}`} alt="" loading="lazy">
                    <br>

                    {#if (god.str > 0)}
                        <strong>strength:</strong> {god.str}
                        <br>
                    {/if}

                    {#if (god.dex > 0)}
                        <strong>dexterity:</strong> {god.dex}
                        <br>
                    {/if}

                    {#if (god.dex > 0)}
                        <strong>willpower:</strong> {god.wil}
                        <br>
                    {/if}

                    {#if (god.life > 0)}
                        <strong>life:</strong> {god.life}
                        <br>
                    {/if}

                    {#if (god.speed > 0)}
                        <strong>speed:</strong> {god.speed}
                        <br>
                    {/if}

                    <ColoredText text={god.description_start} />
                    <br>
                    <Resists item={god} />
                    <br>
                    <TraitItem key={god.trait} item={$data.traits_generic[god.trait]} />
                    <br>
                    <InvokeItem key={god.invoke_1} item={$data.invokes[god.invoke_1]} />
                    <br>
                    <InvokeItem key={god.invoke_2} item={$data.invokes[god.invoke_2]} />
                    <br>
                    <InvokeItem key={god.invoke_3} item={$data.invokes[god.invoke_3]} />
                </p>
            </div>
        {/each}
    </div>
</div>
