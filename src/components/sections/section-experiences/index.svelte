<script lang="ts">
  import Subtitle from "components/parts/Subtitle/index.svelte";
  import ExperienceList from "./ExperienceList.svelte";
  import { MY_LINKEDIN_URL } from "constants/index";
</script>

<div class="container">
  <div class="subtitle">
    <Subtitle num={2} text="Experiences" />
  </div>

  <div class="content">
    <ExperienceList />
  </div>

  <div class="bottom">
    <span>
      Jump to <a href={MY_LINKEDIN_URL}>linkedin</a> if you want to know more!
    </span>
  </div>
</div>

<style lang="scss">
  .container {
    display: grid;
    justify-items: center;
    gap: 0.2rem;
  }
  .subtitle {
    margin-left: auto;
    color: var(--cyan-transparent-05);
  }
  .content {
    padding: 2rem;
    border: 1px solid var(--cyan-transparent-05);
  }
  .bottom {
    text-align: center;
    width: 100%;
  }
</style>
