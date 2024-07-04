<script lang="ts">
  export let title: string
  export let color: string = ''
</script>

<div class="border rounded-sm px-2 text-sm" style={color}>{title}</div>
