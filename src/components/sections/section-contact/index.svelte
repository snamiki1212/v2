<script lang="ts">
  import Subtitle from "components/parts/Subtitle/index.svelte";
  import { MY_EMAIL } from "constants/index";
</script>

<div class="container">
  <div class="subtitle">
    <Subtitle num={4} text="Contact me" />
  </div>
  <div class="container__body">
    <a href={`mailto:${MY_EMAIL}`} class="link"
      >💁‍♂️<span class="slide">✉️</span></a
    >
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

  .subtitle {
    color: var(--cyan-transparent-05);
  }

  .link {
    padding: 1rem 4rem;
    border: 1px solid lightblue;
    background: var(--cyan-transparent-05);
    border-radius: 10px;
    font-size: 3rem;
    text-decoration: none;
  }
  .slide {
    position: absolute;
    animation: 1s _slide ease-in infinite;
    @keyframes _slide {
      from {
        opacity: 0;
      }
      20% {
        opacity: 1;
      }
      to {
        opacity: 0;
        transform: translateX(20px);
      }
    }
  }
</style>
