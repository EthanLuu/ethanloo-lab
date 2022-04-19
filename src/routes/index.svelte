<script lang="ts">
    const mainTitle = "It's Ethan here. Pleasure to meet you!";
    const mainDesc =
        "I am a senior undergraduate student, majoring in software engineering.";
    export let imageUrl = "";
    const avatarUrl = "https://cdn.ethanloo.cn/img/avatar.png";
</script>

{#if imageUrl}
    <img
        src={imageUrl}
        class="object-cover fixed h-full w-full"
        alt="Bing background"
    />
{/if}

<div
    class="bg-black bg-opacity-60 backdrop-blur-sm flex-auto flex justify-center items-center flex-col"
    style="padding: 10vh 10vw;"
>
    <div class="rounded-full overflow-hidden">
        <img src={avatarUrl} class="object-cover h-32" alt="avatar" />
    </div>
    <h1 class="text-5xl font-bold py-6 font-serif">{mainTitle}</h1>
    <p class="text-2xl py-3">{mainDesc}</p>
    <p class="text-2xl py-3">
        <span>Learn more about me at my</span>
        <a
            href="https://blog.ethanloo.cn"
            class="text-blue-400 font-serif font-semibold">BLOG 📝</a
        >
    </p>
    <p class="text-2xl py-3">
        Find some interesting projects in my
        <a
            sveltekit:prefetch
            href="/lab"
            class="text-blue-400 font-serif font-semibold">LAB💡</a
        >
    </p>
</div>

<style>
    a {
        position: relative;
    }

    a::after {
        border-radius: 3px;
        content: "";
        position: absolute;
        z-index: -1;
        top: 99%;
        left: -0.1em;
        right: -0.1em;
        bottom: -2px;
        background: linear-gradient(
            to right,
            rgb(127, 127, 213, 0.5),
            rgb(134, 168, 231, 0.5),
            rgb(145, 234, 228, 0.5)
        );
        transition: all 100ms ease-in-out;
    }

    a:hover::after {
        top: -2px;
    }
</style>
