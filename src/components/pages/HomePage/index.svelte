<script lang="typescript">
  import SectionSNS from "../../sections/section-sns/index.svelte";
  import SectionHero from "../../sections/section-hero/index.svelte";
  import SectionAboutMe from "../../sections/section-aboutme/index.svelte";
  import SectionExperiences from "../../sections/section-experiences/index.svelte";
  import SectionProjects from "../../sections/section-projects/index.svelte";
  import SectionContact from "../../sections/section-contact/index.svelte";
  import SectionFooter from "../../sections/section-footer/index.svelte";
</script>

<div>
  <body>
    <!--  -------------------------------------------------------- -->
    <!--  Nav                                                      -->
    <!--  -------------------------------------------------------- -->
    <SectionSNS />

    <div class="main">
      <!--  -------------------------------------------------------- -->
      <!-- Hero                                                      -->
      <!--  -------------------------------------------------------- -->
      <SectionHero />

      <!--  -------------------------------------------------------- -->
      <!-- About me                                                  -->
      <!--  -------------------------------------------------------- -->
      <SectionAboutMe />

      <!--  -------------------------------------------------------- -->
      <!-- Experience                                                -->
      <!--  -------------------------------------------------------- -->
      <SectionExperiences />

      <!--  -------------------------------------------------------- -->
      <!-- Project                                                   -->
      <!--  -------------------------------------------------------- -->
      <SectionProjects />

      <!--  -------------------------------------------------------- -->
      <!-- Contact me                                                -->
      <!--  -------------------------------------------------------- -->
      <SectionContact />

      <!--  -------------------------------------------------------- -->
      <!--  Footer                                                   -->
      <!--  -------------------------------------------------------- -->
      <SectionFooter />
    </div></body
  >
</div>
