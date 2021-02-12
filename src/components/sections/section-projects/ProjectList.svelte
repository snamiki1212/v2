<script lang="ts">
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
    {
      name: "Lunash",
      descriptionList: ["A web blog developed and designed from scratch."],
      tags: ["React", "Gatsby.js"],
      metaList: [
        { type: "github", url: "https://github.com/snamiki1212/myblog" },
        {
          type: "externalLink",
          url: "https://snamiki1212.com",
        },
      ],
      imgSrc: "assets/images/project_lunash.png",
    },
    {
      name: "Portfolio v2",
      descriptionList: ["A web blog developed and designed from scratch."],
      tags: ["Svelte", "TypeScript", "SCSS"],
      metaList: [
        { type: "github", url: "https://github.com/snamiki1212/v2" },
        {
          type: "externalLink",
          url: "https://snamiki1212.github.io/v2",
        },
      ],
      imgSrc: "assets/images/project_portfolio-v2.png",
    },
  ];
</script>

<div class="container">
  {#each projectList as project}
    <div class="inner-container">
      <Project
        name={project.name}
        descriptions={project.descriptionList}
        tags={project.tags}
        metaList={project.metaList}
        imgSrc={project.imgSrc}
      />
    </div>
  {/each}
</div>

<style lang="scss">
  .container {
    display: grid;
    justify-items: center;
    gap: 2rem;
  }
  .inner-container {
    display: grid;
    justify-items: center;
    border: 1px solid var(--magenta-transparent-05);
  }
</style>
