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
  const top = -200;
</script>

<body>
  <SectionSNS />
  <Layout>
    <SectionHero />

    <IntersectionObserver let:intersecting {top} once={true}>
      <div class:fade-out={!intersecting}>
        <SectionAboutMe />
      </div>
    </IntersectionObserver>

    <IntersectionObserver let:intersecting {top} once={true}>
      <div class:fade-out={!intersecting}>
        <SectionExperiences />
      </div>
    </IntersectionObserver>

    <IntersectionObserver let:intersecting {top} once={true}>
      <div class:fade-out={!intersecting}>
        <SectionProjects />
      </div>
    </IntersectionObserver>

    <IntersectionObserver let:intersecting {top} once={true}>
      <div class:fade-out={!intersecting}>
        <SectionContact />
      </div>
    </IntersectionObserver>
  </Layout>
  <SectionFooter />
</body>

<style lang="scss">
  // NOTE:
  // svelte's transition is fired by creating/removing DOM
  // but it has performance problem and design gattling.
  // this is why I use vanillla css animation.
  // >> REF:https://stackoverflow.com/a/59093272/8842333
  div {
    transition: 0.5s;
  }
  .fade-out {
    opacity: 0;
  }
</style>
