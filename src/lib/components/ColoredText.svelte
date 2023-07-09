<script>
    export let text = "";

    $: new_text = text.replace(/\n/gi, "<br>").replace(/\[color=(#.{6})](.+?)\[\/color\]/gi, `<span style="color: $1">$2</span>`);
</script>

{@html new_text}
