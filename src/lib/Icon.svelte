<script lang="ts">
    export let name = "";
    export let width = "1rem";
    export let height = "1rem";
    const icons = [
        {
            box: 24,
            name: "link",
            svg: `<path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />`
        },
        {
            box: 1024,
            name: "github",
            svg: ` <path d="M512 128C299.872 128 128 299.872 128 512c0 169.6 110.016 313.6 262.624 364.384 19.264 3.52 26.24-8.256 26.24-18.496 0-9.152-0.352-33.28-0.48-65.28-106.88 23.136-129.376-51.488-129.376-51.488-17.504-44.384-42.624-56.256-42.624-56.256-34.88-23.744 2.624-23.232 2.624-23.232 38.496 2.752 58.752 39.488 58.752 39.488 34.24 58.752 89.856 41.76 111.744 32 3.52-24.864 13.504-41.76 24.384-51.36-85.248-9.632-174.88-42.624-174.88-189.76 0-42.016 15.008-76.256 39.488-103.136-3.872-9.6-17.12-48.736 3.744-101.6 0 0 32.256-10.24 105.632 39.36A367.584 367.584 0 0 1 512 313.76c32.64 0.128 65.504 4.352 96.128 12.864 73.376-49.6 105.504-39.36 105.504-39.36 20.992 52.864 7.872 92 3.84 101.6 24.64 26.88 39.392 61.12 39.392 103.136 0 147.52-89.728 179.872-175.232 189.504 13.76 11.744 25.984 35.232 25.984 71.008 0 51.36-0.352 92.736-0.352 105.376 0 10.24 6.848 22.24 26.368 18.496C786.112 825.504 896 681.6 896 512c0-212.128-171.872-384-384-384z"></path>`
        },
        {
            box: 24,
            name: "beaker",
            svg: `<path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />`
        },
        {
            box: 24,
            name: "home",
            svg: `<path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />`
        },
        {
            box: 24,
            name: "identification",
            svg: `<path stroke-linecap="round" stroke-linejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />`
        }
    ];
    let displayIcon = icons.find((e) => e.name === name);
</script>

{#if displayIcon}
    <svg
        class={$$props.class}
        fill="none"
        {width}
        {height}
        viewBox="0 0 {displayIcon.box} {displayIcon.box}"
        >{@html displayIcon.svg}</svg
    >
{/if}
