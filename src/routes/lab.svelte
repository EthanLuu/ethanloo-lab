<script lang="ts">
    import ProjectList from "$lib/ProjectList.svelte";
    const mainTitle = "Welcome to EthanLoo's lab.";
    const mainDesc = "Feel free to visit anywhere you like. 🙆‍♂️";
    const subTitle = "Project List";
    const items = [
        {
            title: "Douban",
            titleClass: "text-green-300",
            desc: "A start of front-end journey with simple static html files.",
            link: "/douban/index.html",
            gitRepo: "https://github.com/EthanLuu/EthanLuu"
        },
        {
            title: "Soo Mooc",
            titleClass: "text-blue-300",
            desc: "Online live teaching platform, developed with React, Ant Design and Nest.js.",
            link: "https://mooc.ethanloo.cn",
            gitRepo: "https://github.com/EthanLuu/EthanLuu"
        },
        {
            title: "Soo Share",
            titleClass: "text-indigo-300",
            desc: "Fragmented information aggregation platform, based on Svelte, Vite, Tailwind and Express.",
            link: "https://share.ethanloo.cn",
            gitRepo: "https://github.com/EthanLuu/EthanLuu"
        },
        {
            title: "Dong Xin Shop",
            titleClass: "text-orange-300",
            desc: "Website for a hareware store, including homepage and product list. Server-side rendering based on Next.js.",
            link: "https://shop.ethanloo.cn",
            gitRepo: "https://github.com/EthanLuu/EthanLuu"
        }
    ];
</script>

<svelte:head>
    <title>EthanLoo's Lab</title>
</svelte:head>

<div class="background fixed h-full w-full" />

<main
    class="bg-black bg-opacity-40 backdrop-blur-sm"
    style="padding: 5vh 10vw;"
>
    <div>
        <h1 class="text-5xl font-bold py-2 font-serif">{mainTitle}</h1>
        <p class="text-2xl py-4">{mainDesc}</p>
    </div>
    <div>
        <h2 class="text-4xl font-semibold py-2 mb-4 font-serif">{subTitle}</h2>
        <ProjectList {items} />
    </div>
</main>

<style>
    .background {
        background-image: url(https://cdn.ethanloo.cn/macos-big-sur-1280x720-dark-wwdc-2020-22655.jpg);
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
