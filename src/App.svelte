<script lang="ts">
    import Icon from "./lib/Icon.svelte";
    const mainTitle = "Welcome to EthanLoo's lab.";
    const mainDesc = "Feel free to visit anywhere you like. 🙆‍♂️";
    const subTitle = "Project List";
    const items = [
        {
            title: "Douban",
            titleClass: "text-green-700",
            desc: "A start of front-end journey with simple static html files.",
            link: "/douban/index.html",
            gitRepo: "https://github.com/EthanLuu/EthanLuu"
        },
        {
            title: "Soo Mooc",
            titleClass: "text-blue-600",
            desc: "Online live teaching platform, developed with React, Ant Design and Nest.js.",
            link: "https://mooc.ethanloo.cn",
            gitRepo: "https://github.com/EthanLuu/EthanLuu"
        },
        {
            title: "Soo Share",
            titleClass: "text-indigo-600",
            desc: "Fragmented information aggregation platform, based on Svelte, Vite, Tailwind and Express.",
            link: "https://share.ethanloo.cn",
            gitRepo: "https://github.com/EthanLuu/EthanLuu"
        },
        {
            title: "Dong Xin Shop",
            titleClass: "text-orange-600",
            desc: "Website for a hareware store, including homepage and product list. Server-side rendering based on Next.js.",
            link: "https://shop.ethanloo.cn",
            gitRepo: "https://github.com/EthanLuu/EthanLuu"
        }
    ];
</script>

<main
    class="h-screen w-screen font-serif text-slate-800 bg-slate-100"
    style="padding: 5vh 10vw;"
>
    <h1 class="text-4xl font-bold my-6">{mainTitle}</h1>
    <p class="my-2 text-xl">{mainDesc}</p>
    <h2 class="text-3xl font-semibold mt-6 mb-3">{subTitle}</h2>
    <ul class="text-xl">
        {#each items as item}
            <li class="flex items-center my-6 relative">
                <div class="absolute flex left-0 top-0">
                    <a
                        title={item.link}
                        href={item.link}
                        class="flex justify-center items-center h-7"
                    >
                        <Icon
                            name="link"
                            class="stroke-current stroke-2 m-1 h-5 w-5 hover:stroke-blue-500"
                        />
                    </a>
                    <a
                        title={item.gitRepo}
                        href={item.gitRepo}
                        class="flex justify-center items-center h-7"
                    >
                        <Icon
                            name="github"
                            class="stroke-current stroke-3 m-1 fill-black h-5 w-5 hover:fill-blue-500"
                        />
                    </a>
                </div>
                <p class="hover:underline duration-450 ease-in-out indent-16">
                    <a href={item.link}>
                        <span class="font-bold {item.titleClass}">
                            {item.title}
                        </span>
                        -
                        <span>
                            {item.desc}
                        </span>
                    </a>
                </p>
            </li>
        {/each}
    </ul>
</main>
