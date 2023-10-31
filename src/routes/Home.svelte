<script>
  import { Card, Button, Toggle } from "flowbite-svelte";
  import { Img } from "flowbite-svelte";
  import SocialIcons from "@rodneylab/svelte-social-icons";
  import { colors } from "../styles/theme";
</script>

<Card
  class="text-center align-middle bg-shakespeare-950 border-none"
  size="lg"
  padding="md"
>
  <div class=" parent grid grid-cols-5 grid-rows-5 gap-4 text-white">
    <div
      class=" div1 col-span-5 bg-shakespeare-900 rounded-xl text-2xl font-bold dark:text-white"
    >
      <span class="">Clément Massit</span>
    </div>
    <div
      class="div2 align-middle col-span-3 row-span-3 row-start-2 bg-shakespeare-900 rounded-xl py-6 px-1"
    >
      <span class="mb-5 text-base sm:text-lg dark:text-gray-400">
        <h2 class="uppercase font-bold text-2xl my-6">
          I'm Clément Massit - Data Scientist
        </h2>
        Young engineer graduated from POLYTECH ANNECY Engineering school. I have
        a degree in computer science & data science
      </span>
    </div>
    <div class="div3 col-span-2 row-span-4 col-start-4 row-start-2">
      <Img
        src="../../public/Clément_Massit.jpg"
        alt="Clément Massit"
        imgClass="rounded-xl"
      />
    </div>
    <div
      class="div4 col-span-3 row-span-1 row-start-5 bg-shakespeare-900 rounded-xl"
    >
      <span class="justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <!-- <SocialIcons network="github" fgColor="#eeeeee" />
        <SocialIcons network="linkedin" fgColor="#eeeeee" bgColor="#125b7a" /> -->
      </span>
    </div>
  </div>
</Card>
<br />

<!-- <div class="parent bg-shakespeare-950 rounded-xl p-2">
  <div class="div1 bg-shakespeare-900 rounded-xl">1</div>
  <div class="div2 bg-shakespeare-900 rounded-xl">
    
  </div>

  <div class="div3 bg-shakespeare-900 rounded-xl">
    <Img
      src="../../public/Clément_Massit.jpg"
      alt="Clément Massit"
      imgClass="rounded-xl"
    />
  </div>
  <div class="div4 bg-shakespeare-900 rounded-xl">
    <span class="justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
      Caca
    </span>
  </div>
</div> -->

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
  .div4 {
    /* grid-area: 3 / 1 / 4 / 2; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
