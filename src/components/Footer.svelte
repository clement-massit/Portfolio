<script>
  import {
    Footer,
    FooterCopyright,
    FooterLinkGroup,
    FooterLink,
    FooterIcon,
  } from "flowbite-svelte";
  import { GithubSolid, LinkedinSolid } from "flowbite-svelte-icons";
  import { Link } from "svelte-routing";
</script>

<Footer class="bg-shakespeare-50">
  <FooterCopyright
    aClass="text-shakespeare-border hover:text-shakespeare-200"
    href="/"
    by="Clément Massit"
    year={2023}
  />

  <FooterLinkGroup ulClass="flex flex-wrap items-center mt-3 text-sm sm:mt-0">
    <FooterLink
      aClass="text-shakespeare-700 hover:text-shakespeare-200"
      href="/">Clément</FooterLink
    >
    <FooterLink
      aClass="text-shakespeare-700 hover:text-shakespeare-200"
      href="/Dashboard"
      ><Link
        to="/Dashboard"
        class=" text-shakespeare-700 hover:text-shakespeare-200">Dashboard</Link
      ></FooterLink
    >
    <FooterLink
      aClass="text-shakespeare-700 hover:text-shakespeare-200"
      href="/About"
      ><Link
        to="/About"
        class=" text-shakespeare-700 hover:text-shakespeare-200">About</Link
      ></FooterLink
    >
  </FooterLinkGroup>
  <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
    <FooterIcon href="https://www.linkedin.com/in/cl%C3%A9ment-massit/">
      <LinkedinSolid
        class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-shakespeare-border dark:hover:text-white"
      />
    </FooterIcon>
    <FooterIcon href="https://github.com/clement-massit">
      <GithubSolid
        class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-shakespeare-border dark:hover:text-white"
      />
    </FooterIcon>
  </div>
</Footer>
