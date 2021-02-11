<script lang="typescript">
  export let numStr: string = "01";
  export let text: string = "__REPLACE_ME__TITLE__";
</script>

<div class="subtitle">
  <span class="subtitle__num">{numStr}.</span>
  <span class="subtitle__text">{text}</span>
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
