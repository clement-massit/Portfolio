<script>
  import { Card } from "flowbite-svelte";
  let hCard = false;
  export let content;
  export let title;
  export let img;
  export let link;
  export let target;
</script>

<div class="flex justify-center text-center">
  <Card {img} {target} href={link} horizontal reverse={hCard} class="mb-4">
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-shakespeare-700 dark:text-white"
    >
      {title}
    </h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
      {content}
    </p>
  </Card>
</div>
