<script lang="ts">
  import Icon from "components/parts/Icon/index.svelte";

  export let name: string;
  export let descriptions: string[];
  export let tags: string[];
  export let metaList: Array<{ url: string; type: "github" | "externalLink" }>;
  export let imgSrc: string;
  const externalUr =
    metaList.find((meta) => meta.type === "externalLink")?.url ?? "#";
</script>

<div class="container">
  <div class="header-container">
    <div class="header-text">{name}</div>
    <div class="header-icon-container">
      {#each metaList as meta}
        <a href={meta.url} class="header-icon">
          <Icon type={meta.type} />
        </a>
      {/each}
    </div>
  </div>
  <div>
    <a href={externalUr}>
      <div class="image-container">
        <img class="image" src={imgSrc} alt="img of project1" />
      </div>
    </a>
  </div>
  <div class="description-container">
    {#each descriptions as description}
      <p>{description}</p>
    {/each}
  </div>
  <div class="tags-container">
    {#each tags as tag}
      <span class="tag">{tag}</span>
    {/each}
  </div>
</div>

<style lang="scss">
  .container {
    display: grid;
    justify-items: center;
    gap: 0.5rem;
    padding: 1rem;
  }

  .description-container {
    padding: 2rem;
    border: solid 1px var(--magenta-transparent-05);
    background: var(--magenta-transparent-01);
    display: grid;
    gap: 1rem;
    width: 100%;
  }

  .tags-container {
    display: flex;
    justify-content: center;
    color: var(--yellow-transparent-05);
  }

  .tag {
    padding: 0 0.5rem;
  }

  .image-container {
    background-color: var(--magenta-transparent-05);
    transition: 0.3s;
    &:hover {
      background-color: transparent;
    }
  }
  .image {
    object-fit: cover;
    mix-blend-mode: screen;
  }

  .header-container {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    justify-items: center;
    align-items: center;
    gap: 2rem;
    width: 100%;
    & > div:nth-child(1) {
      grid-column-start: 2;
    }
  }

  .header-text {
    font-weight: 700;
    font-family: "Limelight";
    font-size: 2.5rem;
    color: var(--magenta-transparent-05);
  }

  .header-icon-container {
    margin-left: auto;
  }
  .header-icon {
    font-size: 1.5rem;
    color: var(--magenta);
    text-decoration: none;
  }
</style>
