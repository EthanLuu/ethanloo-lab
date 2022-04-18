<script lang="ts">
    import ProjectList from "./lib/ProjectList.svelte";
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

<main class="min-h-screen h-full font-serif text-slate-200 bg-cover flex">
    <div
        class="bg-black bg-opacity-40 backdrop-blur-sm"
        style="padding: 5vh 10vw;"
    >
        <h1 class="text-4xl font-bold py-2">{mainTitle}</h1>
        <p class="text-xl py-4">{mainDesc}</p>
        <div class="">
            <h2 class="text-3xl font-semibold py-2 mb-4">{subTitle}</h2>
            <ProjectList {items} />
        </div>
    </div>
</main>

<style>
    main {
        background-image: url(https://cdn.ethanloo.cn/macos-big-sur-1280x720-dark-wwdc-2020-22655.jpg);
    }
</style>
