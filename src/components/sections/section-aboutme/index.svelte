<script lang="ts">
  import Subtitle from "components/parts/Subtitle/index.svelte";
  import TagList from "./TagList.svelte";
  import Avator from "./Avator.svelte";
  import Description from "./Description.svelte";
</script>

<div class="container">
  <div>
    <Subtitle num={1} text="About me" />
  </div>
  <div class="body">
    <div>
      <Avator />
    </div>
    <div>
      <Description />
    </div>
    <div>
      <TagList />
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    display: grid;
    justify-items: center;
    gap: 0.5rem;
  }
  .body {
    display: grid;
    justify-items: center;
    gap: 1.5rem;
    padding: 3rem;
    margin: 0 auto;
    border: 1px solid var(--yellow-transparent-08);
    position: relative;
    &:before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      top: 0.5rem;
      left: 0.5rem;
      border: 2px solid var(--yellow-transparent-08);
      z-index: -1;
    }
  }
</style>
