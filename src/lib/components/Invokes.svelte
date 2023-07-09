<script>
    import InvokeItem from "./InvokeItem.svelte";

    import {version, data} from "../../stores.js";
</script>

<div>
    <h2>Invokes ({Object.keys($data.invokes).length})</h2>

    <div class="grid -columns" style="--columns-count: 5;">
        {#each Object.entries($data.invokes) as [key, invoke]}
            <div>
                <p>
                    <InvokeItem {key} item={invoke} />
                </p>
            </div>
        {/each}
    </div>
</div>
