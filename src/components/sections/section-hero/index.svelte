<div class="section-hero">
  <div class="section-hero__title">:)</div>
  <div class="section-hero__description">
    I'm <span class="section-hero__point">Na</span>miki
    <span class="section-hero__point">Sh</span>un a.k.a
    <span class="section-hero__point">Nash</span>.
  </div>
  <div class="section-hero__message">"No Code, No Life."</div>
</div>

<style lang="scss">
  @import "https://fonts.googleapis.com/css?family=Reenie+Beanie";

  .section-hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Reenie Beanie";
    text-align: center;
    &__title {
      font-size: 5rem;
      font-weight: 900;
      color: var(--cyan);
      // TODO: here glitch
    }
    &__description {
      font-size: 3rem;
      font-weight: 900;
      color: var(--white);
    }
    &__message {
      font-size: 2.3rem;
      color: var(--yellow);
    }

    &__point {
      color: var(--magenta);
    }
  }
</style>
