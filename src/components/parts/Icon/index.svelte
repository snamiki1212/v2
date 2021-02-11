<script lang="ts">
  import Fa from "svelte-fa";
  import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
  import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
  import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";

  type Icon = "github" | "linkedin" | "twitter";
  export let type: Icon = "github";

  const table = {
    github: faGithub,
    twitter: faTwitter,
    linkedin: faLinkedinIn,
  };

  const FontAwesome = table[type];
</script>

<Fa icon={FontAwesome} />
