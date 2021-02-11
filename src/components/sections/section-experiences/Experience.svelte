<script lang="ts">
  export let position: string;
  export let from: string;
  export let to: string;
  export let type: string;
  export let paragraphs: string[];
  export let company: string | undefined;
  export let companyUrl: string | undefined;
</script>

<div>
  {#if company === undefined && companyUrl === undefined}
    {position} as Freelance
  {:else}
    {position} <a href={companyUrl}>@{company}</a>
  {/if}
</div>
<div>🕓{from} ~ {to}</div>
<div>👔{type}</div>
<ul class="experiences-list">
  {#each paragraphs as paragraph}
    <li class="experiences-list__item">
      {paragraph}
    </li>
  {/each}
</ul>

<style lang="scss">
  .experiences-list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;
    &__item {
      color: var(--yellow-transparent-08);
      font-size: 0.9rem;
    }
  }
</style>
