<script lang="ts">
  import Experience from "./Experience.svelte";
  const experienceList = [
    {
      position: "Fullstack Developer",
      company: undefined,
      companyUrl: undefined,
      from: "2019-Jan",
      to: "Present",
      type: "Part-time",
      paragraphs: [
        "Collaborated with more than each 5 companies",
        "Developed a variety of apps using React, React Native, Next.js, TypeScript, Firebase and Ruby on Rails",
      ],
    },
    {
      position: "Backend Developer",
      company: "Arsaga Partners",
      companyUrl: "https://www.arsaga.jp",
      from: "2017-Jun",
      to: "2018-Dec",
      type: "Full-time",
      paragraphs: [
        "Developed web services using PHP/Laravel, jQuery",
        "Developed smartphone game using Elixir/Phoenix",
        "Architected APIs",
        "Collaborated with members as a leader",
      ],
    },
    {
      position: "Project Leader",
      company: "NTT Data Getronics",
      companyUrl: "https://www.nttdata-getronics.co.jp/en",
      from: "2013-Apr",
      to: "2017-May",
      type: "Full-time",
      paragraphs: ["Managed small team", "Coordinated with client"],
    },
  ];
</script>

<div class="list">
  {#each experienceList as experience}
    <div class="item">
      <Experience
        position={experience.position}
        from={experience.from}
        to={experience.to}
        type={experience.type}
        paragraphs={experience.paragraphs}
        company={experience.company}
        companyUrl={experience.companyUrl}
      />
    </div>
  {/each}
</div>

<style lang="scss">
  .list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
  }
  .item {
    padding: 2rem;
    border: 1px solid var(--cyan-transparent-05);
    background: var(--cyan-transparent-01);
  }
</style>
