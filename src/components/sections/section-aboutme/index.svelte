<script lang="ts">
  import Subtitle from "components/parts/Subtitle/index.svelte";
  import TagList from "./TagList.svelte";

  const avatorSrc = "assets/images/avator.jpg";
</script>

<div class="section-aboutme">
  <div class="section-aboutme__title">
    <Subtitle num={1}>About me</Subtitle>
  </div>
  <div class="section-aboutme__avator">
    <img src={avatorSrc} alt="avator img as me" class="avator" />
  </div>
  <div class="section-aboutme__description">
    <p>Hello, I'm Nash, a software developer based in Vancouver.</p>
    <p>
      I love creating degital things like websites, applications, tools, design
      and etc.
    </p>
    <p>
      After graduating from <a
        href="https://www.meiji.ac.jp/cip/english/index.html"
        >Meiji University</a
      > in Japan, I joined some developer teams as a worker or freelancer.
    </p>
    <p>Here are the tech stacks I've been working recently.</p>
  </div>
  <div class="section-aboutme__tags">
    <TagList />
  </div>
</div>

<style lang="scss">
  .section-aboutme {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 2rem;

    max-width: 40rem;
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

    &__title {
      //
    }

    &__avator {
      //
    }

    &__description {
      font-size: 1.1rem;
      & > p {
        margin-bottom: 1rem;
      }
    }

    &__tags {
      width: 100%;
    }

    &__aboutme {
      //
    }
  }

  $size: 15rem;
  .avator {
    width: $size;
    height: $size;
  }
</style>
