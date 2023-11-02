<script>
  import CardHomeClem from "../components/CardHomeClem.svelte";
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import Formations from "../components/Formations.svelte";
  import MediaQuery from "svelte-media-queries";
  import { Card } from "flowbite-svelte";
  import CardsArrangement from "../components/CardsArrangement.svelte";

  let matches;
</script>

<MediaQuery query="(max-width: 480px)" bind:matches>
  {#if matches}
    <CardsArrangement />
  {/if}
  {#if !matches}
    <!-- <CardHomeClem /> -->
    <br />
    <CardsArrangement />
  {/if}
</MediaQuery>
