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

<Navbar
  class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b bg-shakespeare-50 shadow-xl"
>
  <NavBrand href="/">
    <span
      class="self-center whitespace-nowrap text-xl font-bold text-shakespeare-700 hover:text-shakespeare-200 dark:text-white"
      >Portfolio</span
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
        class=" text-shakespeare-700 hover:text-shakespeare-200">Dashboard</Link
      ></NavLi
    >
    <NavLi href="/About"
      ><Link
        to="/About"
        class=" text-shakespeare-700 hover:text-shakespeare-200">About</Link
      ></NavLi
    >
  </NavUl>
</Navbar>
