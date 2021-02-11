<script lang="ts">
  import Subtitle from "../../parts/Subtitle/index.svelte";
  import Icon from "../../parts/Icon/index.svelte";
</script>

<div class="section-projects">
  <div class="section-projects__title">
    <Subtitle num={3}>Projects</Subtitle>
  </div>
  <div class="section-projects__projectList">
    <div class="project">
      <div class="project-description">
        <div class="project-description__title">
          <div class="project-header">
            <span class="project-header__text"> Plangoab </span>
            <div class="project-header__icons">
              <a href="https://github.com/snamiki1212/plangoab">
                <Icon type="github" />
              </a>
              <a href="https://plangoab.snamiki1212.vercel.app">
                <Icon type="externalLink" />
              </a>
            </div>
          </div>
        </div>
        <div class="project-description__img">
          <img
            class="project-img"
            src="/assets/images/project_plangoab.png"
            alt="img of project1"
          />
        </div>
        <div class="project-description__text">
          <p>[UNDER CONSTRUCTION]</p>
          <p>
            A Web app calendar to help a person who wants to plan to go abroad
            because of studying or working.
          </p>
          <p>
            Generate some going abroad plan and you are able to customize by
            yourself.
          </p>
          <p>
            Calculate the period about some visas which are study visa, working
            holiday visa or work visa and so on.
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
              <a href="https://github.com/snamiki1212/myblog">
                <Icon type="github" />
              </a>
              <a href="https://snamiki1212.com">
                <Icon type="externalLink" />
              </a>
            </div>
          </div>
        </div>
        <div class="project-description__img">
          <img
            class="project-img"
            src="/assets/images/project_lunash.png"
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
              <a href="https://github.com/snamiki1212/v2">
                <Icon type="github" />
              </a>
              <a href="https://snamiki1212.github.io/v2">
                <Icon type="externalLink" />
              </a>
            </div>
          </div>
        </div>
        <div class="project-description__img">
          <img
            class="project-img"
            src="/assets/images/project_portfolio-v2.png"
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
  </div>
</div>

<style lang="scss">
  .section-projects {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
      //
    }
    &__projectList {
      display: grid;
      justify-items: center;
      gap: 2rem;
    }
  }

  .project {
    display: flex;
    justify-content: center;
    border: 1px solid var(--magenta-transparent-05);
  }

  .project-description {
    display: flex;
    flex-direction: column;
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
    width: 100%;
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
