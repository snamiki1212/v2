<script lang="typescript">
  export let num: number = 1;
</script>

<div class="subtitle">
  <span class="subtitle__num">0{num}.</span>
  <span class="subtitle__text"><slot /></span>
</div>

<style lang="scss">
  @import "https://fonts.googleapis.com/css?family=Monoton|New+Rocker";

  .subtitle {
    width: 100%;
    color: var(--cyan-transparent-05);
    &__num {
      font-size: 1.5rem;
      font-family: "New Rocker";
    }

    &__text {
      font-size: 2.5rem;
      font-family: "Monoton";
    }
  }
</style>
