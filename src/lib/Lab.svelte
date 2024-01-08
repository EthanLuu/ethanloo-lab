<script lang="ts">
  import ProjectList from '$lib/ProjectList.svelte'
  const mainTitle = "Welcome to EthanLoo's lab."
  const mainDesc = 'Feel free to visit anywhere you like. 🙆‍♂️'
  const projectsTitle = 'Demo Projects 🔬'
  const toolsTitle = 'Small tools 🛠️'
  const projects = [
    {
      title: 'Douban',
      titleClass: 'text-green-300',
      desc: 'A start of front-end journey with simple static html files.',
      link: '/douban/index.html'
    },
    {
      title: 'Soo Mooc',
      titleClass: 'text-blue-300',
      desc: 'Online live teaching platform, developed with React, Ant Design and Nest.js.',
      link: 'https://mooc.ethanloo.cn',
      gitRepo: 'https://github.com/EthanLuu/soomooc'
    },
    {
      title: 'Dong Xin Shop',
      titleClass: 'text-orange-300',
      desc: 'Website for a hareware store, including homepage and product list. Server-side rendering based on Next.js.',
      link: 'https://shop.ethanloo.cn',
      gitRepo: 'https://github.com/EthanLuu/react-hardware-store'
    },
    {
      title: 'Soo Share',
      titleClass: 'text-indigo-300',
      desc: 'Fragmented information aggregation platform, based on Svelte, Vite, Tailwind and Express.',
      link: 'https://share.ethanloo.cn',
      gitRepo: 'https://github.com/EthanLuu/soo-share-svelte'
    },
    {
      title: 'UNiQ',
      titleClass: 'text-fuchsia-300',
      desc: 'UN internship application assistant, based on Vue, Element Plus, ChatGPT and NuxtJS.',
      link: 'https://un.ethanloo.cn',
      gitRepo: 'https://github.com/EthanLuu/find-un-interns'
    }
  ].reverse()

  const tools = [
    {
      title: 'Transcript Translator',
      titleClass: 'text-pink-300',
      desc: 'Help to translate transcripts.',
      link: 'https://translate.ethanloo.cn/',
      gitRepo: 'https://github.com/EthanLuu/transcript-translator'
    },
    {
      title: 'Find UN Internship',
      titleClass: 'text-cyan-300',
      desc: 'Crawl the UN career website and filter the results.',
      link: 'https://un-intern.ethanloo.cn/',
      gitRepo: 'https://github.com/EthanLuu/find-un-interns'
    }
  ]
</script>

<svelte:head>
  <title>EthanLoo's Lab</title>
</svelte:head>

<main class="flex-auto" style="padding: 5vh 10vw;">
  <div>
    <h1 class="text-5xl font-bold py-2 font-serif">{mainTitle}</h1>
    <p class="text-2xl py-4">{mainDesc}</p>
  </div>
  <div class="py-2">
    <h2 class="text-4xl font-semibold py-2 mb-4 font-serif">
      {projectsTitle}
    </h2>
    <ProjectList items={projects} />
  </div>
  <div class="py-2">
    <h2 class="text-4xl font-semibold py-2 mb-4 font-serif">
      {toolsTitle}
    </h2>
    <ProjectList items={tools} />
  </div>
</main>
