<script lang="ts">
  // TODO: move to constants
  const tags = [
    "TypeScript",
    "React / React Native / Next.js",
    "Node.js / Express",
    "PHP / Laravel",
    "Ruby on Rails",
    "Elixir / Phoenix",
  ];
</script>

<ul class="aboutme-tags">
  {#each tags as tag}
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
