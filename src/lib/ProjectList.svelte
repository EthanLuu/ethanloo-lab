<script lang="ts">
    import ProjectCard from "./ProjectCard.svelte";
    interface ProjectItem {
        title: string;
        titleClass: string;
        desc: string;
        link: string;
        gitRepo?: string;
    }
    export let items: ProjectItem[];
</script>

<ul
    class="gap-6 text-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
>
    {#each items as item}
        <ProjectCard {item} />
    {/each}
</ul>
