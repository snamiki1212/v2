<script lang="ts">
  import GlitchText from "components/parts/GlitchText/index.svelte";

  // TODO: move to constraint
  const mail = "snamiki1212@gmail.com";
</script>

<div class="container">
  <a href={`mailto:${mail}`} class="text">
    <GlitchText text="👉 contact me" /><br />
  </a>
</div>

<style lang="scss">
  .container {
    position: fixed;
    top: calc(100vh - 5rem);
    right: 1rem;
  }
  .text {
    text-decoration: none;
    font-family: "Reenie Beanie";
    font-weight: 900;
    font-size: 2.5rem;
  }
</style>
