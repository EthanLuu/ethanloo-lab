<script lang="ts">
  import Icon from '$lib/Icon.svelte'
  import Lab from '$lib/Lab.svelte'
  import { onMount } from 'svelte'
  import type { PageData } from './$types'

  export let data: PageData
  const mainTitle = "It's Ethan here."
  const mainDesc = 'Pleasure to meet you!'
  const avatarUrl = 'https://cdn.ethanloo.cn/img/avatar.png'
  let labContainer: HTMLDivElement
  const items = [
    {
      title: 'Blog',
      icon: 'home',
      link: 'https://blog.ethanloo.cn'
    },
    {
      title: 'Lab',
      icon: 'beaker',
      onClick: () => {
        window.scrollTo({
          top: labContainer.offsetTop || window.screen.height,
          behavior: 'smooth'
        })
      }
    }
  ]

  let backgroundImage: HTMLImageElement
  let isBackgroundLoaded = false
  const handleBackgroundLoaded = () => {
    isBackgroundLoaded = true
  }

  onMount(() => {
    isBackgroundLoaded = backgroundImage.complete
  })
</script>

<!-- <div class="transition-opacity duration-500 {isBackgroundLoaded ? 'opacity-100' : 'opacity-0'}"> -->
<div class="image-container {isBackgroundLoaded ? 'show' : ''}">
  {#if data.imageUrl}
    <img
      bind:this={backgroundImage}
      on:load|once={handleBackgroundLoaded}
      src={data.imageUrl}
      class="object-cover absolute left-0 h-full w-full object-left"
      alt="Bing background"
    />
  {/if}
  <div class="h-full w-full bg-black bg-opacity-70 backdrop-blur-sm" />
</div>

<main class="relative min-h-screen flex-auto flex justify-center items-center flex-col">
  <div
    class="rounded-full overflow-hidden border-4 border-slate-300 border-opacity-50"
  >
    <img src={avatarUrl} class="object-cover h-32 w-32 avatar" alt="avatar" />
  </div>
  <div class="flex flex-col lg:flex-row my-6">
    <span class="text-3xl lg:text-5xl font-bold font-serif text-center">
      {mainTitle}
    </span>
    <span class="w-3" />
    <span class="text-3xl lg:text-5xl font-bold font-serif text-center">
      {mainDesc}
    </span>
  </div>
  <div class="flex gap-4 font-semibold ">
    {#each items as item}
      {#if item.link}
        <a
          data-sveltekit-preload-data
          href={item.link}
          class="btn px-3 py-2 rounded-xl border shadow-sm hover:shadow-lg hover:-translate-y-1 flex items-center bg-slate-600 bg-opacity-30"
        >
          <div class="mr-2 z-10">
            <Icon name={item.icon} class="stroke-current stroke-2" />
          </div>
          <span class="z-10">{item.title}</span>
        </a>
      {:else}
        <button
          on:click={item.onClick}
          tabindex="0"
          class="btn px-3 py-2 rounded-xl border shadow-sm hover:shadow-lg hover:-translate-y-1 flex items-center bg-slate-600 bg-opacity-30"
        >
          <div class="mr-2 z-10">
            <Icon name={item.icon} class="stroke-current stroke-2" />
          </div>
          <span class="z-10">{item.title}</span>
        </button>
      {/if}
    {/each}
  </div>
</main>

<div class="relative" bind:this={labContainer}>
  <Lab />
</div>

<style>
  .btn {
    overflow: hidden;
    position: relative;
    transition: transform 0.2s ease-in-out;
  }

  .btn::before {
    content: '';
    display: block;
    position: absolute;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.4s ease;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 0 0 0 0;
    --tw-bg-opacity: 0.3;
    background: linear-gradient(
      to right,
      rgb(127, 127, 213, var(--tw-bg-opacity)),
      rgb(134, 168, 231, var(--tw-bg-opacity)),
      rgb(145, 234, 228, var(--tw-bg-opacity))
    );
  }

  .btn:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  .image-container {
    position: fixed;
    display: flex;
    height: 100vh;
    width: 100vw;
    clip-path: polygon(0 0, 0% 0, 0 0%);
    -webkit-clip-path: polygon(0 0, 0% 0, 0 0%);
  }

  .image-container.show {
    animation: show-bg 0.5s ease-in-out forwards;
  }

  @keyframes show-bg {
    100% {
      clip-path: polygon(0 0, 200% 0, 0 200%);
      -webkit-clip-path: polygon(0 0, 200% 0, 0 200%);
    }
  }

  .avatar {
    transition: transform 0.3s ease-in-out;
  }
  .avatar:hover {
    transform: rotate(360deg);
  }
</style>
