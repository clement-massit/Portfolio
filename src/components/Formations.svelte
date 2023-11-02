<script>
  import { Card, Img } from "flowbite-svelte";
  import img_popo from "../static/Logo_Polytech_Annecy_Chambery.png";
  import img_taltech from "../static/TalTech.png";
  import MediaQuery from "svelte-media-queries";

  let matches;
</script>

<MediaQuery query="(max-width: 480px)" bind:matches>
  {#if matches}
    <Card
      class="text-center align-middle border-none shadow-none "
      size="sm"
      padding="md"
    >
      <div class="grid grid-cols-4 grid-rows-3 gap-4 text-white">
        <div
          class="txt col-span-4 bg-shakespeare-900 rounded-xl text-2xl font-bold dark:text-white"
        >
          <span>EDUCATION</span>
        </div>
        <div class="img bg-white col-span-2 row-span-2 row-start-2">
          <a href="https://www.polytech.univ-smb.fr/index.html"
            ><Img src={img_popo} alt="Polytech" imgClass="rounded-xl p-3" /></a
          >
        </div>
        <div class="img bg-white col-span-2 row-span-2 col-start-3 row-start-2">
          <a href="https://taltech.ee/en"
            ><Img src={img_taltech} alt="TalTech" imgClass="rounded-xl " /></a
          >
        </div>
      </div>
    </Card>
  {/if}

  {#if !matches}
    <Card
      class="text-center align-middle bg-transparent border-none shadow-none "
      size="sm"
      padding="md"
    >
      <div class="grid grid-cols-4 grid-rows-3 gap-4 text-white">
        <div
          class="txt col-span-4 bg-shakespeare-900 rounded-xl text-2xl font-bold dark:text-white"
        >
          <span>EDUCATION</span>
        </div>
        <div class="img bg-white col-span-2 row-span-2 row-start-2 rounded-xl">
          <a href="https://www.polytech.univ-smb.fr/index.html"
            ><Img src={img_popo} alt="Polytech" imgClass="rounded-xl p-3" /></a
          >
        </div>
        <div
          class="img bg-white col-span-2 row-span-2 col-start-3 row-start-2 rounded-xl"
        >
          <a href="https://taltech.ee/en"
            ><Img src={img_taltech} alt="TalTech" imgClass="rounded-xl " /></a
          >
        </div>
      </div>
    </Card>
  {/if}
</MediaQuery>

<style>
  .img {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .txt {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
