<script lang="ts">
  import GlitchText from "components/parts/GlitchText/index.svelte";
</script>

<div class="container">
  <div class="hi">
    <GlitchText text=":)" />
  </div>
  <div class="line">
    <GlitchText text="I'm " />

    <span class="point"><GlitchText text="Na" hasNoiseBackground /></span
    ><GlitchText text="miki" />

    <span class="point"><GlitchText text="Sh" hasNoiseBackground /></span
    ><GlitchText text="un a.k.a" />

    <span class="point"><GlitchText text="Nash" hasNoiseBackground /></span>
  </div>
  <div class="catchcopy">
    <GlitchText text="''No Code, No Life''" hasNoiseBackground />
  </div>
</div>

<style lang="scss">
  .container {
    height: 100vh;
    display: grid;
    align-content: center;
    font-family: "Reenie Beanie";
    text-align: center;
  }

  .line {
    font-size: 3rem;
    font-weight: 900;
    color: var(--white);
  }

  .hi {
    font-size: 5rem;
    font-weight: 900;
    color: var(--cyan);
  }
  .point {
    color: var(--magenta);
  }
  .catchcopy {
    font-size: 2.3rem;
    color: var(--yellow);
  }
</style>
