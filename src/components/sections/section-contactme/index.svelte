<script lang="ts">
  import GlitchText from "components/parts/GlitchText/index.svelte";

  // TODO: move to constraint
  const mail = "snamiki1212@gmail.com";
</script>

<div class="container">
  <a href={`mailto:${mail}`} class="text">
    <GlitchText text="🐱 Contact Me" />
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
    color: var(--yellow);
    border: 1px solid var(--magenta);
    background: var(--dark-transparent);
    padding: 0.2rem 1rem;
    border-radius: 40px;
    z-index: 999999;
    &:hover {
      opacity: 1;
      font-size: 3rem;
    }
  }
</style>
