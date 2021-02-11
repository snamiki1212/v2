<script lang="ts">
  const githubUrlOfThisSite = "https://github.com/snamiki1212/v2";
  const copyright = "© 2021 NamikiShun a.k.a Nash";
</script>

<div class="container">
  <div class="catchcopy">Opportunity only knocks once.</div>
  <div class="bottom-container">
    <div class="source">
      This site is managed in here <a href={githubUrlOfThisSite}>GitHub</a>.
    </div>
    <hr class="horizon" />
    <div class="copyright">
      <div>{copyright}</div>
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    margin-top: 30vh;
    min-height: 50vh;
    background: var(--black);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    margin: 5rem;
    font-family: "Reenie Beanie";
    font-size: 3rem;
    opacity: 0.7;
  }

  .horizon {
    border: 1px solid var(--magenta-transparent-05);
    width: 80%;
  }

  .bottom-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
