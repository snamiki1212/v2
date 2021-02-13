<script lang="ts">
  import Experience from "./Experience.svelte";
  import { EXPERIENCES_LIST } from "constants/index";
</script>

<div class="list">
  {#each EXPERIENCES_LIST as experience}
    <div class="item">
      <Experience
        position={experience.position}
        from={experience.from}
        to={experience.to}
        type={experience.type}
        paragraphs={experience.paragraphs}
        company={experience.company}
        companyUrl={experience.companyUrl}
      />
    </div>
  {/each}
</div>

<style lang="scss">
  .list {
    display: grid;
    gap: 2rem;
  }
  .item {
    padding: 2rem;
    border: 1px solid var(--cyan-transparent-05);
    background: var(--cyan-transparent-01);
  }
</style>
