<script lang="ts">
  import Fa from "svelte-fa";
  import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
  import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
  import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
  import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkAlt";

  type Icon = "github" | "linkedin" | "twitter" | "externalLink";
  export let type: string = "github";

  const table: { [key in Icon]: any } = {
    github: faGithub,
    twitter: faTwitter,
    linkedin: faLinkedinIn,
    externalLink: faExternalLinkAlt,
  };

  const FontAwesome = table[type];
</script>

<Fa icon={FontAwesome} />
