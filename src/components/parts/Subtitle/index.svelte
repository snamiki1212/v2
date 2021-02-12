<script lang="typescript">
  import GlitchText from "components/parts/GlitchText/index.svelte";
  export let num: number = 1;
  export let text: string;
</script>

<div class="subtitle">
  <span class="number">0{num}.</span>
  <span class="text"><GlitchText {text} /></span>
</div>

<style lang="scss">
  .subtitle {
    width: 100%;
    color: var(--cyan-transparent-05);
  }
  .number {
    font-size: 1.5rem;
    font-family: "New Rocker";
  }

  .text {
    font-size: 2.5rem;
    font-family: "Monoton";
  }
</style>
