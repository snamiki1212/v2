<script lang="ts">
  import Icon from "../../parts/Icon/index.svelte";
</script>

<div class="section-sns">
  <a href="https://twitter.com/snamiki1212">
    <Icon type="twitter" />
  </a>
  <a href="https://github.com/snamiki1212">
    <Icon type="github" />
  </a>
  <a href="https://www.linkedin.com/in/snamiki1212/">
    <Icon type="linkedin" />
  </a>
</div>

<style lang="scss">
  @import url("https://pro.fontawesome.com/releases/v5.10.0/css/fontawesome.css");

  @keyframes easeanime {
    0% {
      transform: translateX(9999px);
    }
    100% {
      transform: translateX(0);
    }
  }

  .hidden {
    visibility: hidden;
  }

  .ease-in {
    animation: easeanime 1s ease 0s;
    color: red;
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translate3d(0, -30%, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  .fadeInDown {
    // animation-name: fadeInDown;
    animation: fadeInDown 1s;
  }

  .section-sns {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    position: fixed;
    bottom: 10%;
    left: 1.5rem;
    z-index: 999; // NOTE: TOP position
    & > a {
      font-size: 1.5rem;
      background: var(--black);
      opacity: 0.7;
      border-radius: 10px;
      padding: 0.5rem;
      &:hover {
        opacity: 1;
      }
    }

    & > a:nth-child(1) {
      color: var(--cyan);
    }
    & > a:nth-child(2) {
      color: var(--magenta);
    }
    & > a:nth-child(3) {
      color: var(--yellow);
    }

    animation: fadeInDown 1s;
  }
</style>
