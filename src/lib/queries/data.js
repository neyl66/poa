async function get_json_data(version, file_name) {
    const response = await fetch(`/${version}/${file_name}.json`);

    if (!response?.ok) {
        throw new Error(`Network response not OK! Status: ${response?.status}`);
    }

    const json = await response.json();

    return json;
}

async function get_allies(version) {
    console.time("get allies time");
    const allies = await get_json_data(version, "Allies");
    console.timeEnd("get allies time");

    return allies;
}

async function get_armor(version) {
    console.time("get armor time");
    const armor = await get_json_data(version, "Armor");
    console.timeEnd("get armor time");

    return armor;
}

async function get_buffs(version) {
    console.time("get buffs time");
    const buffs = await get_json_data(version, "Buffs");
    console.timeEnd("get buffs time");

    return buffs;
}

async function get_classes(version) {
    console.time("get classes time");
    const classes = await get_json_data(version, "Classes");
    console.timeEnd("get classes time");

    return classes;
}

async function get_enemies(version) {
    console.time("get enemies time");
    const enemies = await get_json_data(version, "Enemies");
    console.timeEnd("get enemies time");

    return enemies;
}

async function get_gods(version) {
    console.time("get gods time");
    const gods = await get_json_data(version, "Gods");
    console.timeEnd("get gods time");

    return gods;
}

async function get_invokes(version) {
    console.time("get invokes time");
    const invokes = await get_json_data(version, "Invokes");
    console.timeEnd("get invokes time");

    return invokes;
}

async function get_races(version) {
    console.time("get races time");
    const races = await get_json_data(version, "Races");
    console.timeEnd("get races time");

    return races;
}

async function get_traits(version) {
    console.time("get traits time");
    const traits = await get_json_data(version, "Traits");
    console.timeEnd("get traits time");

    return traits;
}

async function get_traits_generic(version) {
    console.time("get traits generic time");
    const traits_generic = await get_json_data(version, "TraitsGeneric");
    console.timeEnd("get traits generic time");

    return traits_generic;
}

async function get_weapons(version) {
    console.time("get weapons time");
    const weapons = await get_json_data(version, "Weapons");
    console.timeEnd("get weapons time");

    return weapons;
}

export default async function get_data(version) {
    console.time("get data time");
    const [allies, armor, buffs, classes, enemies, gods, invokes, races, traits, traits_generic, weapons] = await Promise.all([
        get_allies(version),
        get_armor(version),
        get_buffs(version),
        get_classes(version),
        get_enemies(version),
        get_gods(version),
        get_invokes(version),
        get_races(version),
        get_traits(version),
        get_traits_generic(version),
        get_weapons(version),
    ]);
    console.timeEnd("get data time");

    return {
        allies,
        armor,
        buffs,
        classes,
        enemies,
        gods,
        invokes,
        races,
        traits,
        traits_generic,
        weapons,
    };
}
