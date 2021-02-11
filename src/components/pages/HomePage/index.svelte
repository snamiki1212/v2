<script lang="typescript">
  import SectionSNS from "../../sections/section-sns/index.svelte";
  import SectionHero from "../../sections/section-hero/index.svelte";
  import SectionAboutMe from "../../sections/section-aboutme/index.svelte";
  import SectionExperiences from "../../sections/section-experiences/index.svelte";
  import SectionFooter from "../../sections/section-footer/index.svelte";
  import SectionProjects from "../../sections/section-projects/index.svelte";
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
      <div class="section-contact">
        <div class="section-contact__title">
          <div class="subtitle">
            <span class="subtitle__num">04. </span>
            <span class="subtitle__text">Contact me</span>
          </div>
        </div>
        <div class="section-contact__body">
          <a href="mailto:snamiki1212@gmail.com"> 👉Contact me </a>
        </div>
      </div>
    </div>

    <!--  -------------------------------------------------------- -->
    <!--  Footer                                                   -->
    <!--  -------------------------------------------------------- -->
    <SectionFooter />
  </body>
</div>
