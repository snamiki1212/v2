<script lang="typescript">
  import SectionSNS from "components/sections/section-sns/index.svelte";
  import SectionHero from "components/sections/section-hero/index.svelte";
  import SectionAboutMe from "components/sections/section-aboutme/index.svelte";
  import SectionExperiences from "components/sections/section-experiences/index.svelte";
  import SectionProjects from "components/sections/section-projects/index.svelte";
  import SectionContact from "components/sections/section-contact/index.svelte";
  import SectionFooter from "components/sections/section-footer/index.svelte";
  import Layout from "components/parts/Layout/index.svelte";
</script>

<div>
  <body>
    <SectionSNS />
    <Layout>
      <SectionHero />
      <SectionAboutMe />
      <SectionExperiences />
      <SectionProjects />
      <SectionContact />
    </Layout>
    <SectionFooter />
  </body>
</div>
