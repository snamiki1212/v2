<script lang="typescript">
  import HomePage from "components/pages/HomePage/index.svelte";
  import EasterEgg from "components/parts/EasterEgg/index.svelte";
  import SnsMeta from "components/parts/SnsMeta/index.svelte";
</script>

<!-- Meta -->
<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <SnsMeta />
</svelte:head>

<!-- Page -->
<EasterEgg />
<HomePage />
