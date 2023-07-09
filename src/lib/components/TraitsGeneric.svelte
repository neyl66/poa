<script>
    import TraitItem from "./TraitItem.svelte";

    import {version, data} from "../../stores.js";
</script>

<div>
    <h2>Traits generic ({Object.keys($data.traits_generic).length})</h2>

    <div class="grid -columns" style="--columns-count: 5;">
        {#each Object.entries($data.traits_generic) as [key, trait]}
            <div>
                <p>
                    <TraitItem {key} item={trait} />
                </p>
            </div>
        {/each}
    </div>
</div>
