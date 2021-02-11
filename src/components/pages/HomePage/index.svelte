<script lang="typescript">
  import SectionSNS from "components/sections/section-sns/index.svelte";
  import SectionHero from "components/sections/section-hero/index.svelte";
  import SectionAboutMe from "components/sections/section-aboutme/index.svelte";
  import SectionExperiences from "components/sections/section-experiences/index.svelte";
  import SectionProjects from "components/sections/section-projects/index.svelte";
  import SectionContact from "components/sections/section-contact/index.svelte";
  import SectionFooter from "components/sections/section-footer/index.svelte";
  import Layout from "components/parts/Layout/index.svelte";

  // animations
  import IntersectionObserver from "components/parts/IntersectionObserver/index.svelte";
  import { fade } from "svelte/transition";
  const top = -200;
</script>

<div>
  <body>
    <SectionSNS />
    <Layout>
      <SectionHero />
      <IntersectionObserver let:intersecting {top} once={true}>
        {#if intersecting}
          <div transition:fade>
            <SectionAboutMe />
          </div>
        {/if}
      </IntersectionObserver>

      <IntersectionObserver let:intersecting {top} once={true}>
        {#if intersecting}
          <div transition:fade>
            <SectionExperiences />
          </div>
        {/if}
      </IntersectionObserver>

      <IntersectionObserver let:intersecting {top} once={true}>
        {#if intersecting}
          <div transition:fade>
            <SectionProjects />
          </div>
        {/if}
      </IntersectionObserver>

      <IntersectionObserver let:intersecting {top} once={true}>
        {#if intersecting}
          <div transition:fade>
            <SectionContact />
          </div>
        {/if}
      </IntersectionObserver>
    </Layout>
    <SectionFooter />
  </body>
</div>

<style lang="scss">
  .hidden {
    visibility: hidden;
  }
</style>
