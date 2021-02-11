<script lang="ts">
</script>

<div class="main">
  <slot />
</div>

<style lang="scss">
  .main {
    display: grid;
    justify-items: center;
    gap: 10rem;
    padding: 1rem;

    & > div {
      max-width: 30rem;
    }
  }
</style>
