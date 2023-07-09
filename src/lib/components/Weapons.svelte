<script>
    import WeaponItem from "./WeaponItem.svelte";

    import {version, data} from "../../stores.js";
</script>

<div>
    <h2>Weapons ({Object.keys($data.weapons).length})</h2>

    <div class="grid -columns" style="--columns-count: 5;">
        {#each Object.entries($data.weapons) as [key, weapon]}
            <div>
                <p>
                    <WeaponItem {key} item={weapon} />
                </p>
            </div>
        {/each}
    </div>
</div>
