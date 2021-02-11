<script lang="typescript">
  import SectionHero from "../../sections/section-hero/index.svelte";
  import SectionAboutMe from "../../sections/section-aboutme/index.svelte";
  import SectionExperiences from "../../sections/section-experiences/index.svelte";
</script>

<div>
  <body>
    <!--  -------------------------------------------------------- -->
    <!--  Nav                                                      -->
    <!--  -------------------------------------------------------- -->
    <div class="section-sns">
      <a href="https://twitter.com/snamiki1212"><i class="fab fa-twitter" /></a>
      <a href="https://github.com/snamiki1212"><i class="fab fa-github" /></a>
      <a href="https://www.linkedin.com/in/snamiki1212/"
        ><i class="fab fa-linkedin" /></a
      >
    </div>

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
      <div class="section-projects">
        <div class="section-projects__title">
          <div class="subtitle">
            <span class="subtitle__num">03. </span>
            <span class="subtitle__text">Projects</span>
          </div>
        </div>
        <div class="section-projects__projectList">
          <div class="project">
            <div class="project-description">
              <div class="project-description__title">
                <div class="project-header">
                  <span class="project-header__text"> Plangoab </span>
                  <div class="project-header__icons">
                    <a href="https://github.com/snamiki1212/plangoab"
                      ><i class="fab fa-github" /></a
                    >
                    <a href="https://plangoab.snamiki1212.vercel.app"
                      ><i class="fas fa-external-link-alt" /></a
                    >
                  </div>
                </div>
              </div>
              <div class="project-description__img">
                <img
                  class="project-img"
                  src="assets/project_plangoab.png"
                  alt="img of project1"
                />
              </div>
              <div class="project-description__text">
                <p>[UNDER CONSTRUCTION]</p>
                <p>
                  A Web app calendar to help a person who wants to plan to go
                  abroad because of studying or working.
                </p>
                <p>
                  Generate some going abroad plan and you are able to customize
                  by yourself.
                </p>
                <p>
                  Calculate the period about some visas which are study visa,
                  working holiday visa or work visa and so on.
                </p>
              </div>
              <div class="project-description__tags">
                <span>React</span>
                <span>Redux</span>
                <span>ReduxToolkit</span>
              </div>
            </div>
          </div>

          <!--  -->
          <div class="project">
            <div class="project-description">
              <div class="project-description__title">
                <div class="project-header">
                  <span class="project-header__text"> Lunash </span>
                  <div class="project-header__icons">
                    <a href="https://github.com/snamiki1212/myblog"
                      ><i class="fab fa-github" /></a
                    >
                    <a href="https://snamiki1212.com"
                      ><i class="fas fa-external-link-alt" /></a
                    >
                  </div>
                </div>
              </div>
              <div class="project-description__img">
                <img
                  class="project-img"
                  src="assets/project_lunash.png"
                  alt="img of project1"
                />
              </div>
              <div class="project-description__text">
                <p>A web blog developed and designed from scratch.</p>
              </div>
              <div class="project-description__tags">
                <span>React</span>
                <span>Gatsby.js</span>
              </div>
            </div>
          </div>
          <!--  -->

          <!--  -->
          <div class="project">
            <div class="project-description">
              <div class="project-description__title">
                <div class="project-header">
                  <span class="project-header__text"> Portfolio v2 </span>
                  <div class="project-header__icons">
                    <a href="https://github.com/snamiki1212/v2"
                      ><i class="fab fa-github" /></a
                    >
                    <a href="https://snamiki1212.github.io/v2"
                      ><i class="fas fa-external-link-alt" /></a
                    >
                  </div>
                </div>
              </div>
              <div class="project-description__img">
                <img
                  class="project-img"
                  src="assets/project_portfolio-v2.png"
                  alt="img of project1"
                />
              </div>
              <div class="project-description__text">
                <p>A web blog developed and designed from scratch.</p>
              </div>
              <div class="project-description__tags">
                <span>[TODO]Svelte</span>
                <span>[TODO]TypeScript</span>
                <span>SCSS</span>
              </div>
            </div>
          </div>
          <!--  -->
        </div>
      </div>

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
    <div class="footer">
      <div class="footer__message">Opportunity only knocks once.</div>
      <div class="footer-bottom">
        <div class="footer-bottom__source">
          This site is managed in here <a
            href="https://github.com/snamiki1212/v2">GitHub</a
          >.
        </div>
        <hr class="footer-bottom__horizon" />
        <div class="footer-bottom__copyright">
          <div>© 2021 NamikiShun a.k.a Nash</div>
        </div>
      </div>
    </div>
  </body>
</div>
