<script lang="ts">
  import Icon from "components/parts/Icon/index.svelte";

  // TODO: move to constants
  const twitterUrl = "https://twitter.com/snamiki1212";
  const githubUrl = "https://github.com/snamiki1212";
  const linkedinUrl = "https://www.linkedin.com/in/snamiki1212";
</script>

<div class="section-sns">
  <a href={twitterUrl}>
    <Icon type="twitter" />
  </a>
  <a href={githubUrl}>
    <Icon type="github" />
  </a>
  <a href={linkedinUrl}>
    <Icon type="linkedin" />
  </a>
</div>

<style lang="scss">
  .section-sns {
    display: grid;
    justify-content: space-between;
    gap: 2rem;
    position: fixed;
    bottom: 1.5rem;
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
  }
</style>
