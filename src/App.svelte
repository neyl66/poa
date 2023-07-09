<script>
    import "@picocss/pico";
    import "./assets/styles.css";

    import Home from "./lib/components/Home.svelte";

    import {router, active} from "tinro";

    import {QueryClient, QueryClientProvider} from "@tanstack/svelte-query";

    import {version} from "./stores.js";

    const query_client = new QueryClient();

    router.mode.hash();
</script>

<QueryClientProvider client={query_client}>
    <header class="container-fluid">
        <nav>
            <ul>
                <li><h1 class="no-mb">Path of Achra {$version}</h1></li>
                <li><a href="/weapons" class="outline" role="button" use:active>weapons</a></li>
                <li><a href="/armor" class="outline" role="button" use:active>armor</a></li>
                <li><a href="/traits" class="outline" role="button" use:active>traits</a></li>
                <li><a href="/traits-generic" class="outline" role="button" use:active>traits generic</a></li>
                <li><a href="/races" class="outline" role="button" use:active>races</a></li>
                <li><a href="/classes" class="outline" role="button" use:active>classes</a></li>
                <li><a href="/gods" class="outline" role="button" use:active>gods</a></li>
                <li><a href="/buffs" class="outline" role="button" use:active>buffs</a></li>
                <li><a href="/invokes" class="outline" role="button" use:active>invokes</a></li>
                <li><a href="/allies" class="outline" role="button" use:active>allies</a></li>
                <li><a href="/enemies" class="outline" role="button" use:active>enemies</a></li>
            </ul>
        </nav>
    </header>

    <main class="container-fluid">
        <Home />
    </main>
</QueryClientProvider>

