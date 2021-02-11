<script lang="ts">
  import Subtitle from "components/parts/Subtitle/index.svelte";

  // TODO: move to constants
  const mail = "snamiki1212@gmail.com";
</script>

<div class="section-contact">
  <div class="section-contact__title">
    <Subtitle num={4}>Contact me</Subtitle>
  </div>
  <div class="section-contact__body">
    <a href={`mailto:${mail}`}> 👉Contact me </a>
  </div>
</div>

<style lang="scss">
  .section-contact {
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__body {
      text-align: center;
      font-size: 1.5rem;
    }
  }
</style>
