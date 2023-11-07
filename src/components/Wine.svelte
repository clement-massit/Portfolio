<script>
  import wine_old from "./wine_old.json";
  import wine_new from "./wine_new.json";
  import { Card } from "flowbite-svelte";
  import Chart from "./Chart_Wines.svelte";
  import WordCloud from "./WordCloud.svelte";
  import { wine_name, wine_name_js } from "./wine_name";

  function process_data(dataset) {
    const occurrences = {};

    // Parcourir la liste
    for (const valeur of dataset) {
      // Vérifier si la valeur est déjà dans le dictionnaire
      if (occurrences.hasOwnProperty(valeur)) {
        // Incrémenter la valeur du dictionnaire
        occurrences[valeur]++;
      } else {
        // Ajouter la valeur au dictionnaire avec une valeur de 1
        occurrences[valeur] = 1;
      }
    }
    var x = Object.keys(occurrences);
    var y = Object.values(occurrences);
    var data = [];
    for (let index = 0; index < x.length; index++) {
      data.push({ label: x[index], value: y[index] });
    }

    return data;
  }
  console.log(process_data(wine_new.data));

  const gauge_stat = {
    count: 6329.0,
    mean: 65.659082,
    std: 162.599997,
    min: 4.99,
    med25: 19.98,
    med50: 29.15,
    med75: 60.95,
    max: 3119.08,
  };
</script>

<div class="mt-24 mb-10">
  <h1 class="text-shakespeare-950">SPANISH WINE QUALIFICATION</h1>
</div>

<div class="grid grid-cols-4 grid-rows-4 gap-4">
  <div class="col-span-2 row-span-2">
    <div>
      <Chart data={process_data(wine_old.data)} />
    </div>
  </div>
  <div class="col-span-2 row-span-2 col-start-3">
    <div>
      <Chart data={process_data(wine_new.data)} />
    </div>
  </div>
  <div class="col-span-2 row-span-2 col-start-2 row-start-3">
    <div class="col-span-2 justify-center items-center flex">
      <Card>
        <WordCloud text={wine_name} />
      </Card>
    </div>
  </div>
</div>

<!-- <Plot
  {data}
  layout={{
    margin: { t: 0 },
  }}
  fillParent="width"
  debounce={250}
  <Plot
  {data}
  layout={{
    margin: { t: 0 },
  }}
  fillParent="width"
  debounce={250}
/>
/>  -->
