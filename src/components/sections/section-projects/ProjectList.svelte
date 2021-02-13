<script lang="ts">
  import Project from "./Project.svelte";
  import { PROJECT_LIST } from "constants/index";
</script>

<div class="container">
  {#each PROJECT_LIST as project}
    <div class="inner-container">
      <Project
        name={project.name}
        descriptions={project.descriptionList}
        tags={project.tags}
        metaList={project.metaList}
        imgSrc={project.imgSrc}
      />
    </div>
  {/each}
</div>

<style lang="scss">
  .container {
    display: grid;
    justify-items: center;
    gap: 2rem;
  }
  .inner-container {
    display: grid;
    justify-items: center;
    border: 1px solid var(--magenta-transparent-05);
  }
</style>
