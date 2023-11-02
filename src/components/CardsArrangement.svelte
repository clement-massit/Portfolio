<script>
  import { Card } from "flowbite-svelte";
  import CardHomeClem from "./CardHomeClem.svelte";
  import Formations from "./Formations.svelte";
  import TechStack from "./TechStack.svelte";
</script>

<div class="container mt-16">
  <div class="first"><CardHomeClem /></div>
  <div class="second">
    <div class="formations"><Formations /></div>
    <div class="tech"><TechStack /></div>
  </div>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: 1.3fr 0.7fr;
    grid-template-rows: 1fr;
    gap: 0px 15px;
    grid-auto-flow: row;
    grid-template-areas: "first second";
  }

  .first {
    grid-area: first;
  }

  .second {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 15px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      "formations formations formations"
      "tech tech tech"
      "tech tech tech";
    grid-area: second;
  }

  .formations {
    grid-area: formations;
  }

  .tech {
    grid-area: tech;
  }
</style>
