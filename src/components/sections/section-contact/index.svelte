<script lang="ts">
  import Subtitle from "components/parts/Subtitle/index.svelte";

  // TODO: move to constants
  const mail = "snamiki1212@gmail.com";
</script>

<div class="container">
  <div>
    <Subtitle num={4}>Contact me</Subtitle>
  </div>
  <div class="container__body">
    <a href={`mailto:${mail}`}> 👉Contact me👈 </a>
  </div>
</div>

<style lang="scss">
  .container {
    height: 30vh;
    display: grid;
    justify-items: center;

    &__body {
      text-align: center;
      font-size: 1.5rem;
    }
  }
</style>
