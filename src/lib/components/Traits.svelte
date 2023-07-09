<script>
    import TraitItem from "./TraitItem.svelte";

    import {version, data} from "../../stores.js";
</script>

<div>
    <h2>Traits ({Object.keys($data.traits).length})</h2>

    <div class="grid -columns" style="--columns-count: 5;">
        {#each Object.entries($data.traits) as [key, trait]}
            <div>
                <p>
                    <TraitItem {key} item={trait} />
                </p>
            </div>
        {/each}
    </div>
</div>
