<script>
    import ArmorItem from "./ArmorItem.svelte";

    import {version, data} from "../../stores.js";
</script>

<div>
    <h2>Armor ({Object.keys($data.armor).length})</h2>

    <div class="grid -columns" style="--columns-count: 5;">
        {#each Object.entries($data.armor) as [key, armor]}
            <div>
                <p>
                    <ArmorItem {key} item={armor} />
                </p>
            </div>
        {/each}
    </div>
</div>
