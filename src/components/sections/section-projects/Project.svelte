<script lang="ts">
  import Icon from "components/parts/Icon/index.svelte";

  export let name: string;
  // export let Icons: unknown[]; // TODO: component
  // export let Img: unknown; // TODO: component
  export let descriptions: string[];
  export let tags: string[];
  export let metaList: Array<{ url: string; type: "github" | "externalLink" }>;
  export let imgSrc: string;
</script>

<div class="project-description">
  <div class="project-description__title">
    <div class="project-header">
      <span class="project-header__text">{name}</span>
      <div class="project-header__icons">
        {#each metaList as meta}
          <a href={meta.url}>
            <Icon type={meta.type} />
          </a>
        {/each}
      </div>
    </div>
  </div>
  <div class="project-description__img">
    <img class="project-img" src={imgSrc} alt="img of project1" />
  </div>
  <div class="project-description__text">
    {#each descriptions as description}
      {description}
    {/each}
  </div>
  <div class="project-description__tags">
    {#each tags as tag}
      <span>{tag}</span>
    {/each}
  </div>
</div>

<style lang="scss">
  .project-description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 1rem;

    &__img {
      //
    }
    &__text {
      padding: 2rem;
      border: solid 1px var(--magenta-transparent-05);
      background: var(--magenta-transparent-01);
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    &__tags {
      display: flex;
      justify-content: center;
      gap: 2rem;
      color: var(--yellow-transparent-05);
    }
  }

  .project-img {
    max-width: 20rem;
    object-fit: cover;
  }

  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    &__text {
      font-weight: 700;
      font-family: "Limelight";
      font-size: 2.5rem;
      color: var(--magenta-transparent-05);
    }
    &__icons {
      font-size: 1.5rem;
      & > a {
        color: var(--magenta);
      }
    }
  }
</style>
