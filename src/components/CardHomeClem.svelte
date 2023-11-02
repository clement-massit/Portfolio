<script>
  import { Card, Button, Toggle } from "flowbite-svelte";
  import { Img } from "flowbite-svelte";
  import SocialIcons from "@rodneylab/svelte-social-icons";
  import img_clem from "../static/Clément_Massit.jpg";
  import MediaQuery from "svelte-media-queries";
  import Carousel from "./Carousel.svelte";
  import Formations from "./Formations.svelte";
  import Socials from "./Socials.svelte";
  const data = {
    Name: "Clément Massit",
    titleDescription: " I'm Clément Massit - Data Scientist",
    Description:
      " Young engineer graduated from POLYTECH ANNECY Engineering school. I have a degree in computer science & data science",
  };
  let matches;
</script>

<MediaQuery query="(max-width: 480px)" bind:matches>
  {#if matches}
    <Card
      class="text-center align-middle bg-shakespeare-950 border-none "
      size="sm"
      ><div class="parent grid grid-cols-2 grid-rows-4 gap-4">
        <div
          class="div1 col-span-2 row-span-2 bg-shakespeare-900 rounded-xl text-2xl font-bold"
        >
          <span class="mb-5 text-base sm:text-lg">
            <h2 class="uppercase font-bold text-2xl my-5 text-white">
              {data.titleDescription}
            </h2>
            {data.Description}
          </span>
        </div>
        <div
          class="div2 row-span-2 row-start-3 bg-shakespeare-900 rounded-xl py-1 px-1"
        >
          <a
            href="https://github.com/clement-massit"
            class="justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mx-3"
          >
            <SocialIcons network="github" fgColor="#eeeeee" bgColor="#116b93" />
          </a>
          <a
            href="https://www.linkedin.com/in/cl%C3%A9ment-massit/"
            class="justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mx-3 my-1"
          >
            <SocialIcons
              network="linkedin"
              fgColor="#eeeeee"
              bgColor="#116b93"
            />
          </a>
        </div>
        <div class="div3 row-span-2 row-start-3">
          <Img src={img_clem} alt="Clément Massit" imgClass="rounded-xl" />
        </div>
      </div>
    </Card>
  {/if}

  {#if !matches}
    <Card
      class="container bg-shakespeare-950 border-none mt-28 shadow-xl mb-14"
      size="xl"
      padding="md"
    >
      <div class="grid grid-cols-4 grid-rows-3 gap-4">
        <div class="div1 bg-shakespeare-900 col-span-3 rounded-xl">
          <span class="mb-5 text-base sm:text-lg text-white px-16">
            <h1 class="uppercase font-bold my-5">
              {data.titleDescription}
            </h1>
            <h2>{data.Description}</h2>
          </span>
        </div>
        <div
          class="div1 bg-shakespeare-900 col-span-3 col-start-1 row-start-2 rounded-xl"
        >
          <Carousel />
        </div>
        <div
          class="div1 bg-shakespeare-900 col-span-3 col-start-1 row-start-3 flex justify-center rounded-xl"
        >
          <div class="grid grid-cols-2 divide-x divide-shakespeare-950">
            <div class="div2">
              <Formations />
            </div>
            <div class="div2 px-32">
              <Socials />
            </div>
          </div>
        </div>
        <div class="row-span-3 col-start-4 row-start-1">
          <div class="photo">
            <Img
              src={img_clem}
              alt="Clément Massit"
              imgClass="rounded-xl shrink"
            />
          </div>
        </div>
      </div>

      <!-- <div
        class="txt bg-shakespeare-900 rounded-xl text-2xl font-bold dark:text-white"
      >
        <span class="mb-5 text-base sm:text-lg">
          <h2 class="uppercase font-bold text-2xl my-5 text-white">
            {data.titleDescription}
          </h2>
          {data.Description}

          <span /></span
        >
      </div>
      <div class="splide"><Carousel /></div>
      <div class="links">
        <a
          href="https://github.com/clement-massit"
          class="justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mx-3"
        >
          <SocialIcons network="github" fgColor="#eeeeee" bgColor="#116b93" />
        </a>
        <a
          href="https://www.linkedin.com/in/cl%C3%A9ment-massit/"
          class="justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mx-3 my-1"
        >
          <SocialIcons network="linkedin" fgColor="#eeeeee" bgColor="#116b93" />
        </a>
      </div>
      <div class="photo">
        <Img src={img_clem} alt="Clément Massit" imgClass="rounded-xl" />
      </div> -->
    </Card>
  {/if}
</MediaQuery>

<style>
  .parent {
    display: grid;
    text-align: center;
    vertical-align: middle;
    color: white;
  }

  .div1 {
    /* grid-area: 1 / 1 / 2 / 3; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .div2 {
    /* grid-area: 2 / 1 / 3 / 2; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .div3 {
    /* grid-area: 2 / 2 / 4 / 3; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .photo {
    grid-area: photo;
    min-width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
</style>
