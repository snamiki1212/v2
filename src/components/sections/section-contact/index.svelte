<script lang="ts">
  import Subtitle from "components/parts/Subtitle/index.svelte";
  import { EMAIL } from "constants/index";

  // TODO: move to constants
  const mail = EMAIL;
</script>

<div class="container">
  <div>
    <Subtitle num={4} text="Contact me" />
  </div>
  <div class="container__body">
    <a href={`mailto:${mail}`} class="link">💁‍♂️✉️</a>
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

  .link {
    padding: 1rem 4rem;
    border: 1px solid lightblue;
    background: var(--cyan-transparent-05);
    border-radius: 10px;
    font-size: 3rem;
    text-decoration: none;
  }
</style>
