<script lang="ts">
  export let text = "***";
  export let hasNoiseBackground = false;
</script>

<div class="text-wrapper">
  <span
    class="text {hasNoiseBackground ? 'noise-background' : ''}"
    data-time={text}>{text}</span
  >
</div>

<style lang="scss">
  // $bg-color: #111;
  // $txt-color: #fff;

  $color-c1: magenta;
  $color-c2: cyan;

  $offset-c1: 3;
  $offset-c2: 2;

  $lay-c1: 2;
  $lay-c2: 2;

  //--------------------------------------------
  // Main
  // ------------------------------------------

  .text-wrapper {
    // Glitch
    transform: skewX(0deg) scaleY(1);
    animation: noisy 4s linear infinite;

    // Core
    display: inline-block;
    text-align: center;

    /** removable params */
    // background: $bg-color;
    // color: $txt-color;
    // font-family: "Lato", sans-serif;
    // font-weight: 700;
    // font-size: 128px;
    // line-height: 1;

    & > .text {
      display: block;
      position: relative;

      &:before,
      &:after {
        // Glitch
        display: block;
        content: attr(data-time);
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;

        /** removable params */
        // color: $txt-color;
        // background: $bg-color;
      }

      &:before {
        // Glitch
        left: -($offset-c2 * 1px);
        text-shadow: $lay-c2 * 1px 0 $color-c2;
        animation: c2 1s infinite linear alternate-reverse;
      }

      &:after {
        // Glitch
        left: $offset-c1 * 1px;
        text-shadow: -($lay-c1 * 1px) 0 $color-c1;
        animation: c1 2s infinite linear alternate-reverse;
      }
    }
  }

  // --------------------------------------------------------------------
  // Animation
  // --------------------------------------------------------------------

  // animation
  @function _random($val) {
    @return random() * $val + 1;
  }

  @keyframes c1 {
    @for $i from 0 through 20 {
      #{$i*(1/20)*10*10%} {
        clip: rect(_random(100) * 1px, 9999px, _random(100) * 1px, 0);
      }
    }
  }

  @keyframes c2 {
    @for $i from 0 through 20 {
      #{$i*(1/20)*10*10%} {
        clip: rect(_random(100) * 1px, 9999px, _random(100) * 1px, 0);
      }
      23% {
        transform: scaleX(0.8);
      }
    }
  }

  @keyframes noisy {
    @for $i from 0 through 50 {
      #{$i*(1/50)*10*10%} {
        transform: translate(_random(3) * 1px, _random(3) * 1px);
      }
    }
    1% {
      transform: scaleY(1) skewX(0deg);
    }
    1.5% {
      transform: scaleY(3) skewX(-60deg);
    }
    2% {
      transform: scaleY(1) skewX(0deg);
    }
    51% {
      transform: scaleX(1) scaleY(1) skewX(0deg);
    }
    52% {
      transform: scaleX(1.5) scaleY(0.2) skewX(80deg);
    }
    53% {
      transform: scaleX(1) scaleY(1) skewX(0deg);
    }
  }
</style>
