<script lang="ts">
  import Icon from "components/parts/Icon/index.svelte";
  import Project from "./Project.svelte";

  const projectList = [
    {
      name: "Plangoab",
      descriptionList: [
        "[UNDER CONSTRUCTION]",
        "A Web app calendar to help a person who wants to plan to go abroad because of studying or working.",
        "Generate some going abroad plan and you are able to customize by yourself.",
        "Calculate the period about some visas which are study visa, working holiday visa or work visa and so on.",
      ],
      tags: ["React", "Redux", "ReduxToolkit"],
      metaList: [
        { type: "github", url: "https://github.com/snamiki1212/plangoab" },
        {
          type: "externalLink",
          url: "https://plangoab.snamiki1212.vercel.app",
        },
      ],
      imgSrc: "assets/images/project_plangoab.png",
    },
  ];
</script>

{#each projectList as project}
  <div class="project">
    <Project
      name={project.name}
      descriptions={project.descriptionList}
      tags={project.tags}
      metaList={project.metaList}
      imgSrc={project.imgSrc}
    />
  </div>
{/each}

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
        src="assets/images/project_lunash.png"
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
        src="assets/images/project_portfolio-v2.png"
        alt="img of project1"
      />
    </div>
    <div class="project-description__text">
      <p>A web blog developed and designed from scratch.</p>
    </div>
    <div class="project-description__tags">
      <span>Svelte</span>
      <span>TypeScript</span>
      <span>SCSS</span>
    </div>
  </div>
</div>

<!--  -->
<style lang="scss">
  .project {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--magenta-transparent-05);
  }
</style>
