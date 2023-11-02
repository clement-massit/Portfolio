<script>
  import { Card, Img } from "flowbite-svelte";
  import MediaQuery from "svelte-media-queries";
  import { Gallery } from "flowbite-svelte";
  const images1 = [
    {
      alt: "python",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
    },
    {
      alt: "Javascript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
    },
    {
      alt: "Java",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
    },
    {
      alt: "R",
      src: "https://download.logo.wine/logo/R_(programming_language)/R_(programming_language)-Logo.wine.png",
    },
  ];
  const images2 = [
    {
      alt: "MySQL",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    },
    {
      alt: "NodeJs",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      alt: "HTML",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
    },
    {
      alt: "CSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
    },
  ];
  const images3 = [
    {
      alt: "AWS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      alt: "Docker",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg",
    },
    {
      alt: "TF",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    },
    {
      alt: "PyTorch",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    },
  ];
  const images4 = [
    {
      alt: "React",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    },
    {
      alt: "Svelte",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original-wordmark.svg",
    },
    {
      alt: "Angular",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original-wordmark.svg",
    },
    {
      alt: "Tailwind",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
    },
  ];

  let matches;
</script>

<MediaQuery query="(max-width: 480px)" bind:matches>
  {#if matches}
    <Card
      class="text-center align-middle bg-shakespeare-950 border-none "
      size="sm"
      padding="md"
    >
      Caca
    </Card>
  {/if}

  {#if !matches}
    <Card
      class="text-center bg-shakespeare-100 border-none "
      size="sm"
      padding="md"
    >
      <Gallery class="gap-5 grid-cols-2 md:grid-cols-4">
        <Gallery items={images1} />
        <Gallery items={images2} />
        <Gallery items={images3} />
        <Gallery items={images4} />
      </Gallery>
    </Card>
  {/if}
</MediaQuery>

<style>
</style>
