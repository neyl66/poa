<script>
    import Weapons from "./Weapons.svelte";
    import Armor from "./Armor.svelte";
    import Traits from "./Traits.svelte";
    import TraitsGeneric from "./TraitsGeneric.svelte";
    import Races from "./Races.svelte";
    import Gods from "./Gods.svelte";
    import Classes from "./Classes.svelte";
    import Buffs from "./Buffs.svelte";
    import Invokes from "./Invokes.svelte";
    import Allies from "./Allies.svelte";
    import Enemies from "./Enemies.svelte";

    import {Route} from "tinro";

    import {createQuery} from "@tanstack/svelte-query";

    import get_data from "../../lib/queries/data.js";

    import {version, data} from "../../stores.js";

    const query = createQuery({
        queryKey: ["data", $version],
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        retry: 0,
        queryFn: () => get_data($version),
        onSuccess: (all_data) => {
            console.log('all data:', all_data);
            $data = all_data;
        },
        onError: (error) => {
            console.error(error);
        },
    });
</script>

{#if ($query.isLoading)}
    <div>
        <span aria-busy="true"></span>
        Loading data
    </div>
{:else if ($query.isError)}
    <p>Error: {$query.error.message}</p>
{:else if ($query.isSuccess)}
    <Route path="/" redirect="/weapons" />

    <Route path="/weapons">
        <Weapons />
    </Route>

    <Route path="/armor">
        <Armor />
    </Route>

    <Route path="/traits">
        <Traits />
    </Route>

    <Route path="/traits-generic">
        <TraitsGeneric />
    </Route>

    <Route path="/races">
        <Races />
    </Route>

    <Route path="/classes">
        <Classes />
    </Route>

    <Route path="/gods">
        <Gods />
    </Route>

    <Route path="/buffs">
        <Buffs />
    </Route>

    <Route path="/invokes">
        <Invokes />
    </Route>

    <Route path="/allies">
        <Allies />
    </Route>

    <Route path="/enemies">
        <Enemies />
    </Route>
{/if}
