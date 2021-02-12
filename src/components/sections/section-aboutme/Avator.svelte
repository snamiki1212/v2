<script lang="ts">
  const avatorSrc = "assets/images/avator.jpg";
  // TODO: alt must be uniq
</script>

<div class="container">
  <div class="box b1" />
  <div class="box b2" />
  <img src={avatorSrc} alt="avator img as me" class="avator box" />
</div>

<style lang="scss">
  $size: 15rem;

  .avator {
    mix-blend-mode: screen;
    opacity: 0.99;
  }

  .container {
    position: relative;
  }
  .box {
    width: $size;
    height: $size;
  }
  .b1 {
    top: -1rem;
    left: -1rem;
    position: absolute;
    background-color: var(--cyan-transparent-05);
  }
  .b2 {
    top: +1rem;
    left: +1rem;
    position: absolute;
    background-color: var(--magenta-transparent-05);
  }
</style>
