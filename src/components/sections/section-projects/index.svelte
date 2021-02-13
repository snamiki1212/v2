<script lang="ts">
  import Subtitle from "components/parts/Subtitle/index.svelte";
  import ProjectList from "./ProjectList.svelte";
</script>

<div>
  <div class="subtitle">
    <Subtitle num={3} text="Projects" />
  </div>
  <ProjectList />
</div>

<style lang="scss">
  .subtitle {
    color: var(--magenta-transparent-05);
  }
</style>
