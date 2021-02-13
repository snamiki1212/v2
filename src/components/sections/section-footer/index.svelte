<script lang="ts">
  import { COPYRIGHT, THIS_GITHUB_URL } from "constants/index";
</script>

<div class="container">
  <div class="catchcopy">Opportunity only knocks once.</div>
  <div class="bottom-container">
    <div class="source">
      This site is managed in here <a href={THIS_GITHUB_URL}>GitHub</a>.
    </div>
    <hr class="horizon" />
    <div class="copyright">
      <div>{COPYRIGHT}</div>
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    padding: 5rem 5rem 0 5rem;
    min-height: 50vh;
    background: var(--black);
    display: grid;
    align-content: space-between;
  }

  .source {
    & > a {
      color: var(--cyan);
    }
  }

  .copyright {
    color: var(--yellow-transparent-08);
  }

  .catchcopy {
    font-family: "Reenie Beanie";
    font-size: 3rem;
    opacity: 0.7;
  }

  .horizon {
    border: 1px solid var(--magenta-transparent-05);
    width: 100%;
  }

  .bottom-container {
    display: grid;
    justify-items: center;
  }
</style>
