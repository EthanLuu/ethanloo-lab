<script lang="ts">
  import Tag from './Tag.svelte'
  import Icon from './Icon.svelte'
  interface ProjectItem {
    title: string
    titleClass?: string
    desc: string
    link: string
    techs?: string[]
    gitRepo?: string
  }
  export let item: ProjectItem
</script>

<div
  class="transition-all ease-in-out duration-100 border border-slate-200 border-opacity-40 pt-2 px-4 rounded-md bg-slate-400 bg-opacity-30 flex flex-col relative hover:-translate-y-1 hover:bg-opacity-40"
>
  <h3 class="{item.titleClass} text-white text-2xl font-bold">
    {item.title}
  </h3>
  {#if item.techs}
    <div class="flex gap-2 flex-wrap mt-4">
      {#each item.techs || [] as tech}
        <Tag title={tech} />
      {/each}
    </div>
  {/if}
  <div class="border-b border-slate-400 border-opacity-30 py-4 flex-1">
    <p class="text-lg">
      {item.desc}
    </p>
  </div>
  <div
    class="flex justify-end py-2 items-center overflow-hidden whitespace-nowrap text-ellipsis"
  >
    <a
      title={item.link}
      href={item.link}
      target="_blank"
      class="flex items-center hover:text-blue-300 link overflow-hidden"
    >
      <Icon
        name="link"
        class="stroke-current stroke-2 h-4 w-4 mx-1 hover:stroke-blue-300"
      />
      <span class="text-base overflow-hidden text-ellipsis">
        {item.link}
      </span>
    </a>
    <a
      hidden={!item.gitRepo}
      title={item.gitRepo}
      href={item.gitRepo}
      target="_blank"
      class="ml-2 z-10"
    >
      <Icon name="github" class="fill-white h-5 w-5 hover:fill-black" />
    </a>
  </div>
</div>

<style>
  .link::after {
    position: absolute;
    content: '';
    inset: 0px;
    z-index: 1;
    cursor: pointer;
  }

  .link:hover {
    text-decoration: underline;
  }
</style>
