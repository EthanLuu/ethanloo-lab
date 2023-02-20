<script lang="ts">
    import "../app.css";
</script>

<main class="min-h-screen text-slate-200 bg-cover flex flex-col relative">
    <slot />
    <footer class="absolute bottom-0 w-full text-center py-2 font-serif">
        <a href="https://beian.miit.gov.cn/" class="text-sm`"> 苏ICP备2020057383号-2 </a>
    </footer>
</main>
