<script lang="ts">
  import ProjectList from '$lib/ProjectList.svelte'
  const mainTitle = "Welcome to EthanLoo's lab."
  const mainDesc = 'Feel free to visit anywhere you like. 🙆‍♂️'
  const projectsTitle = 'Demo Projects 🔬'
  const toolsTitle = 'Small tools 🛠️'
  const projects = [
    {
      title: 'Douban',
      desc: 'A start of front-end journey with simple static html files.',
      techs: ['HTML', 'CSS'],
      link: '/douban/index.html'
    },
    {
      title: 'Soo Mooc',
      desc: 'Online live teaching platform, developed with React, Ant Design and Nest.js.',
      techs: ['React', 'Ant Design', 'Nest.js', 'Websocket'],
      link: 'https://mooc.ethanloo.cn',
      gitRepo: 'https://github.com/EthanLuu/soomooc'
    },
    {
      title: 'Soo Share',
      desc: 'Fragmented information aggregation platform, based on Svelte, Vite, Tailwind and Express.',
      techs: ['Svelte', 'Vite', 'Tailwind', 'Express'],
      link: 'https://share.ethanloo.cn',
      gitRepo: 'https://github.com/EthanLuu/soo-share-svelte'
    },
    {
      title: 'UNiQ',
      desc: 'UN internship application assistant, based on Vue, Element Plus, ChatGPT and NuxtJS.',
      techs: ['Vue', 'Element Plus', 'ChatGPT', 'NuxtJS'],
      link: 'https://un.ethanloo.cn',
      gitRepo: 'https://github.com/EthanLuu/find-un-interns'
    }
  ].reverse()

  const tools = [
    {
      title: 'Transcript Translator',
      techs: ['React', 'Python'],
      desc: 'Help to translate transcripts.',
      link: 'https://translate.ethanloo.cn/',
      gitRepo: 'https://github.com/EthanLuu/transcript-translator'
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
