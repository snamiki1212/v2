<script lang="ts">
  export let text = "***";
  export let hasNoiseBackground = false;
</script>

<div class="glitch-wrapper screen">
  <div class="text-wrapper">
    <span
      data-time={text}
      class="text {hasNoiseBackground ? 'noise-background' : ''}">{text}</span
    >
  </div>
</div>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css?family=Reenie+Beanie");
  $bg-color: rgba(0, 0, 0, 0.2);
  // $txt-color: #fff;

  $color-c1: magenta;
  $color-c2: cyan;

  $offset-c1: 3;
  $offset-c2: 2;

  $lay-c1: 2;
  $lay-c2: 2;

  // ------------------------------------------------------------
  // animation
  // ------------------------------------------------------------
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

  @keyframes clock-bag {
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

  @keyframes tr-bag {
    @for $i from 0 through 50 {
      #{$i*(1/50)*10*10%} {
        transform: translate(_random(5) * 1px, _random(5) * 1px);
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

  @keyframes bg-move {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 0 -32px;
    }
  }

  // ------------------------------------------------------------
  // style
  // ------------------------------------------------------------
  .glitch-wrapper {
    // background: $bg-color;
    // color: $txt-color;
    display: inline-block;
    font-family: "Reenie Beanie";
    &:before {
      position: absolute;
      z-index: 999999;
      content: "";
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }

  .screen {
    position: relative;
    z-index: 1;
  }

  .text-wrapper {
    z-index: 9;
    text-align: center;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    cursor: default;
    transform: skewX(0deg) scaleY(1);
    animation: clock-bag 4s linear infinite;
    font-family: "Reenie Beanie";
  }

  .is-off {
    animation: is-off 2s linear infinite !important;
  }

  .noise-background {
    &:before,
    &after {
      background: $bg-color;
    }
  }
  .text {
    font-family: "Reenie Beanie";
    display: inline-block;
    // font-size: 5rem;
    &:before,
    &:after {
      display: block;
      content: attr(data-time);
      position: absolute;
      top: 0;
      // color: $txt-color;
      // background: $bg-color;
      width: 100%;
      clip: rect(0, 100%, 0, 0);
      font-family: "Reenie Beanie";
    }
    &:before {
      left: -($offset-c2) px;
      text-shadow: ($lay-c2) px 0 $color-c2;
      animation: c2 1s infinite linear alternate-reverse;
    }
    &:after {
      left: ($offset-c1) px;
      text-shadow: -($lay-c1) px 0 $color-c1;
      animation: c1 2s infinite linear alternate-reverse;
    }
  }
</style>
