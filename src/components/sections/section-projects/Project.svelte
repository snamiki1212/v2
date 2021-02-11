<script lang="ts">
  import Icon from "components/parts/Icon/index.svelte";

  export let name: string;
  export let descriptions: string[];
  export let tags: string[];
  export let metaList: Array<{ url: string; type: "github" | "externalLink" }>;
  export let imgSrc: string;
</script>

<div class="container">
  <div class="header-container">
    <span class="header-text">{name}</span>
    <div>
      {#each metaList as meta}
        <a href={meta.url} class="header-icon">
          <Icon type={meta.type} />
        </a>
      {/each}
    </div>
  </div>
  <div>
    <img class="image" src={imgSrc} alt="img of project1" />
  </div>
  <div class="description-container">
    {#each descriptions as description}
      <p>{description}</p>
    {/each}
  </div>
  <div class="tags-container">
    {#each tags as tag}
      <span>{tag}</span>
    {/each}
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 1rem;
  }

  .description-container {
    padding: 2rem;
    border: solid 1px var(--magenta-transparent-05);
    background: var(--magenta-transparent-01);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .tags-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    color: var(--yellow-transparent-05);
  }

  .image {
    max-width: 20rem;
    object-fit: cover;
  }

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }

  .header-text {
    font-weight: 700;
    font-family: "Limelight";
    font-size: 2.5rem;
    color: var(--magenta-transparent-05);
  }
  .header-icon {
    font-size: 1.5rem;
    color: var(--magenta);
  }
</style>
