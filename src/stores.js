import {readable, derived, writable} from "svelte/store";

// All past versions.
export const versions = readable([
    "v0.6.6",
]);

// Current version.
export const version = derived(versions, ($versions) => $versions[0]);

export const data = writable({});
