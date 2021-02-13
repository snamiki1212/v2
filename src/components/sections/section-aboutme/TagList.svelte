<script lang="ts">
  import { MY_TECH_TAGS } from "constants/index";
</script>

<ul class="aboutme-tags">
  {#each MY_TECH_TAGS as tag}
    <li class="aboutme-tags__item">{tag}</li>
  {/each}
</ul>

<style lang="scss">
  .aboutme-tags {
    padding: 2rem 4rem;
    border: 1px solid var(--yellow-transparent-05);
    background: var(--yellow-transparent-01);
    &__item {
      font-size: 0.9rem;
    }
  }
</style>
