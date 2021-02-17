<script lang="ts">
  export let position: string;
  export let from: string;
  export let to: string;
  export let type: string;
  export let paragraphs: string[];
  export let company: string | undefined;
  export let companyUrl: string | undefined;
  const isFreelance = company === undefined && companyUrl === undefined;
</script>

<p class="position">
  {#if isFreelance}
    {position} as Freelance
  {:else}
    {position} <a href={companyUrl}>@{company}</a>
  {/if}
</p>
<p class="period">🕓{from} ~ {to}</p>
<p class="type">👔{type}</p>
<ul class="paragraphList">
  {#each paragraphs as paragraph}
    <li class="paragraphItem">
      {paragraph}
    </li>
  {/each}
</ul>

<style lang="scss">
  .position {
    font-size: 1.5rem;
    font-weight: 900;
  }

  .period {
    opacity: 0.8;
  }
  .type {
    opacity: 0.8;
  }
  .paragraphList {
    display: grid;
    gap: 0.5rem;
  }
  .paragraphItem {
    color: var(--yellow-transparent-08);
    font-size: 0.9rem;
  }
</style>
