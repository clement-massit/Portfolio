<script>
  import { Card, Img } from "flowbite-svelte";
  import img_popo from "../static/Logo_Polytech_Annecy_Chambery.png";
  import img_taltech from "../static/TalTech.png";
  import MediaQuery from "svelte-media-queries";
  import SocialIcons from "@rodneylab/svelte-social-icons";

  let matches;
</script>

<MediaQuery query="(max-width: 480px)" bind:matches>
  {#if matches}
    <Card class="text-center align-middle border-none " size="sm" padding="md">
      <div class="grid grid-cols-4 grid-rows-3 gap-4 text-white">
        <div
          class="txt col-span-4 bg-shakespeare-900 rounded-xl text-2xl font-bold dark:text-white"
        >
          <span>SOCIALS</span>
        </div>
        <div class="img col-span-2 row-span-2 row-start-2">
          <a
            href="https://github.com/clement-massit"
            class="justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mx-3"
          >
            <SocialIcons
              network="github"
              fgColor="#eeeeee"
              bgColor="#116b93"
              width="60"
              height="60"
            />
          </a>
        </div>

        <div class="img col-span-2 row-span-2 col-start-3 row-start-2">
          <a
            href="https://www.linkedin.com/in/cl%C3%A9ment-massit/"
            class="justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mx-3 my-1"
          >
            <SocialIcons
              network="linkedin"
              fgColor="#eeeeee"
              bgColor="#116b93"
              width="60"
              height="60"
            />
          </a>
        </div>
      </div>
    </Card>
  {/if}

  {#if !matches}
    <Card
      class="text-center align-middle bg-transparent border-none shadow-none"
      size="sm"
      padding="md"
    >
      <div class="grid grid-cols-3 grid-rows-2 gap-x-20 gap-y-5 text-white">
        <div
          class="txt col-start-2 bg-shakespeare-900 rounded-xl text-2xl font-bold dark:text-white"
        >
          <span>SOCIALS</span>
        </div>

        <div class="img row-start-2">
          <a
            href="https://github.com/clement-massit"
            class="justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4"
            target="_blank"
          >
            <SocialIcons
              network="github"
              fgColor="#eeeeee"
              bgColor="#116b93"
              width="60"
              height="60"
            />
          </a>
        </div>

        <div class="img row-start-2">
          <a
            href="https://www.linkedin.com/in/cl%C3%A9ment-massit/"
            class="justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 my-1"
            target="_blank"
          >
            <SocialIcons
              network="linkedin"
              fgColor="#eeeeee"
              bgColor="#116b93"
              width="60"
              height="60"
            />
          </a>
        </div>
        <div class="img row-start-2">
          <a
            href="https://www.instagram.com/clem_massit/"
            class="justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 my-1"
            target="_blank"
          >
            <SocialIcons
              network="instagram"
              fgColor="#eeeeee"
              bgColor="#116b93"
              width="60"
              height="60"
            />
          </a>
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
