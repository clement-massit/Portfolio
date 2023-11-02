<script>
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import "@splidejs/splide/dist/css/themes/splide-default.min.css";
  import { Card, Img } from "flowbite-svelte";
  import { stack } from "./techstack";
  import Image from "./Image.svelte";
</script>

<div class="carousel">
  <Splide
    options={{
      width: "60%",
      type: "slide",
      rewind: true,
      perPage: 4,
      focus: "center",
      trimSpace: false,
      wheel: false,
      gap: 4,
    }}
  >
    {#each stack as item, index}
      <SplideSlide>
        <div class="carousel">
          <Card size="xs" class="bg-shakespeare-100 border-none">
            <Img src={stack[index].src} imgClass="w-20 h-20" />
          </Card>
        </div>
      </SplideSlide>
    {/each}
  </Splide>
</div>

<style>
  .carousel {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
