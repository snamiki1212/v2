<script lang="ts">
  import { THIS_GITHUB_URL, MY_TWITTER_ACCOUNT } from "constants/index";
  const OGP_IMAGE_PATH = "assets/images/ogp.png";
  const OGP_SITE_NAME = "Portfolio | Nash";
  const OGP_PAGE_TITLE = ":) Nash";
  const OGP_DESCRIPTION = "Portfolio | Namiki Shun a.k.a Nash";
</script>

<svelte:head>
  <!-- OGP -->
  <meta name="description" content={OGP_DESCRIPTION} />

  <!-- ogp -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content={OGP_PAGE_TITLE} />
  <meta property="og:description" content={OGP_DESCRIPTION} />
  <meta property="og:image" content={OGP_IMAGE_PATH} />
  <meta property="og:image:alt" content={OGP_IMAGE_PATH} />
  <meta property="og:url" content={THIS_GITHUB_URL} />
  <meta property="og:site_name" content={OGP_SITE_NAME} />

  <!-- facebook -->
  <!-- <meta property="article:author" content="https://www.facebook.com/xxxnamexxx" /> -->
  <!-- <meta property="fb:admins" content="123456789" /> -->

  <!-- twitter card -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={OGP_PAGE_TITLE} />
  <meta name="twitter:description" content={OGP_DESCRIPTION} />
  <meta name="twitter:image:src" content={OGP_IMAGE_PATH} />
  <meta name="twitter:site" content={MY_TWITTER_ACCOUNT} />
</svelte:head>
