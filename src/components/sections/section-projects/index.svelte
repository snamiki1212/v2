<script lang="ts">
  import Subtitle from "components/parts/Subtitle/index.svelte";
  import ProjectList from "./ProjectList.svelte";
</script>

<div class="container">
  <div>
    <Subtitle num={3}>Projects</Subtitle>
  </div>
  <div class="projectList">
    <ProjectList />
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
  }

  .projectList {
    display: grid;
    justify-items: center;
    gap: 2rem;
    width: 100%;
  }
</style>
