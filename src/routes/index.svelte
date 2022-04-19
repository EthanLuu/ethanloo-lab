<script lang="ts">
    import Icon from "$lib/Icon.svelte";

    const mainTitle = "It's Ethan here.";
    const mainDesc = "Pleasure to meet you!";
    export let imageUrl = "";
    const avatarUrl = "https://cdn.ethanloo.cn/img/avatar.png";
    const items = [
        {
            title: "Lab",
            icon: "beaker",
            link: "/lab"
        },
        {
            title: "Blog",
            icon: "home",
            link: "https://blog.ethanloo.cn"
        }
    ];
</script>

{#if imageUrl}
    <div>
        <img
            src={imageUrl}
            class="object-cover fixed h-full w-full"
            alt="Bing background"
        />
    </div>
{/if}

<div
    class="bg-black bg-opacity-60 backdrop-blur-sm flex-auto flex justify-center items-center flex-col"
>
    <div
        class="rounded-full overflow-hidden border-4 border-slate-300 border-opacity-50"
    >
        <img src={avatarUrl} class="object-cover h-32" alt="avatar" />
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
            <a
                sveltekit:prefetch
                href={item.link}
                class="px-3 py-2 rounded-xl border shadow-sm hover:shadow-lg hover:-translate-y-1 flex items-center bg-slate-600 bg-opacity-30"
            >
                <div class="mr-2">
                    <Icon name={item.icon} class="stroke-current stroke-2" />
                </div>
                <span>{item.title}</span>
            </a>
        {/each}
    </div>
</div>

<style>
    a {
        overflow: hidden;
        position: relative;
        transition: transform 0.2s ease-in-out;
    }

    a::before {
        content: "";
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

    a:hover::before {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
</style>
