<script lang="ts">
  import Subtitle from "components/parts/Subtitle/index.svelte";
  import ExperienceList from "./ExperienceList.svelte";
</script>

<div class="section-experiences">
  <div class="section-experiences__title">
    <Subtitle num={2}>Experiences</Subtitle>
  </div>
  <div class="section-experiences__content">
    <ExperienceList />
  </div>

  <div class="section-experiences__bottom">
    Jump to <a href="https://www.linkedin.com/in/snamiki1212/">linkedin</a> if you
    want to know more!
  </div>
</div>

<style lang="scss">
  .section-experiences {
    display: flex;
    flex-direction: column;
    justify-content: center;
    &__content {
      padding: 2rem;
      border: 1px solid var(--cyan-transparent-05);
    }
    &__bottom {
      text-align: center;
    }
  }
</style>
