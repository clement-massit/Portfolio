<script>
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
  } from "flowbite-svelte";
  import { Router, Link, Route } from "svelte-routing";
</script>

<div class="relative px-8">
  <Navbar
    class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b bg-shakespeare-50 "
  >
    <NavBrand href="/">
      <span
        class="self-center whitespace-nowrap text-xl font-bold text-shakespeare-700 hover:text-shakespeare-200 dark:text-white"
        >App test</span
      >
    </NavBrand>
    <NavHamburger />
    <NavUl>
      <NavLi href="/"
        ><Link to="/" class=" text-shakespeare-700 hover:text-shakespeare-200"
          >Clément</Link
        ></NavLi
      >
      <NavLi href="/Dashboard"
        ><Link
          to="/Dashboard"
          class=" text-shakespeare-700 hover:text-shakespeare-200"
          >Dashboard</Link
        ></NavLi
      >
    </NavUl>
  </Navbar>
</div>
