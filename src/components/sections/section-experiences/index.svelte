<script lang="ts">
  import Subtitle from "components/parts/Subtitle/index.svelte";
  import ExperienceList from "./ExperienceList.svelte";

  // TODO: move to constants
  const linkedinUrl = "https://www.linkedin.com/in/snamiki1212";
</script>

<div class="container">
  <div class="title">
    <Subtitle num={2}>Experiences</Subtitle>
  </div>
  <div class="content">
    <ExperienceList />
  </div>

  <div class="bottom">
    Jump to <a href={linkedinUrl}>linkedin</a> if you want to know more!
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    //
  }
  .content {
    padding: 2rem;
    border: 1px solid var(--cyan-transparent-05);
  }
  .bottom {
    text-align: center;
  }
</style>
