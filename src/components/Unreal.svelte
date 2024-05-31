<script>
  import { ArrowLeftSolid } from "flowbite-svelte-icons";
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import "@splidejs/splide/dist/css/themes/splide-default.min.css";
  import { Video } from "flowbite-svelte";
  const sources_videos = [
    "src/static/videos/Ice_nuka.mp4",
    "src/static/videos/Nature.mp4",
    "src/static/videos/ArchHouse.mp4",
    "src/static/videos/Ship.mp4",
    "src/static/videos/Tavern.mp4",
  ];
</script>

{#each sources_videos as item, index}
  <div class="my-32">
    <video
      class="relative w-full h-full object-cover"
      muted
      autoplay
      loop
      playsinline
      disablepictureinpicture
    >
      <source src={item} type="video/mp4" />
    </video>
  </div>
{/each}

<!-- <div class="carousel">
  <Splide
    options={{
      width: "80%",
      type: "slide",
      rewind: true,
      perPage: 1,
      focus: "center",
      trimSpace: false,
      wheel: false,
      gap: 400,
    }}
  >
    
 
    {#each sources_videos as item, index}
      <SplideSlide>
        <div class="carousel">
          <div class="flex items-center justify-center h-screen">
            <Video src={item} controls class="w-full" trackSrc={item} />
          </div>
        </div>
      </SplideSlide>
    {/each}
  </Splide> 
</div> -->
<!-- <h2 class=" text-center text-shakespeare-900 font-bold">
  All those videos are made with Unreal Engine
</h2>
<h2 class="mb-20 text-shakespeare-900">It uses Quixel components</h2> -->

<style>
  /* .carousel {
    margin-top: 2vh;
    display: flex;
    justify-content: center;
    align-items: center;
  } */
</style>
