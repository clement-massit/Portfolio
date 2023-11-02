<script>
  import {
    Footer,
    FooterCopyright,
    FooterLinkGroup,
    FooterLink,
    FooterIcon,
  } from "flowbite-svelte";
  import { GithubSolid, LinkedinSolid } from "flowbite-svelte-icons";
</script>

<Footer>
  <FooterCopyright href="/" by="Clément Massit" year={2023} />

  <FooterLinkGroup
    ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
  >
    <FooterLink href="/">Clément</FooterLink>
    <FooterLink href="/Dashboard">Dashboard</FooterLink>
    <FooterLink href="/">Projects</FooterLink>
  </FooterLinkGroup>
  <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
    <FooterIcon href="https://www.linkedin.com/in/cl%C3%A9ment-massit/">
      <LinkedinSolid
        class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
      />
    </FooterIcon>
    <FooterIcon href="https://github.com/clement-massit">
      <GithubSolid
        class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
      />
    </FooterIcon>
  </div>
</Footer>
