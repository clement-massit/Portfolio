<script>
  import { Card, CardPlaceholder } from "flowbite-svelte";
  import { onMount } from "svelte";
  import Projects from "../components/Projects.svelte";
  import cardio_disease from "../static/CardioDisease.jpg";
  import mass_shooting from "../static/USmass_shooting.png";

  // import FusionCharts from "fusioncharts";
  // import Charts from "fusioncharts/fusioncharts.charts";
  // import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
  // import SvelteFC, { fcRoot } from "svelte-fusioncharts";

  let beer_data = [];
  let abv = [];
  let dict = {};
  let global = [];
  function comparer(a, b) {
    return a.id - b.id;
  }
  const fetchdata = (async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/clement-massit/serverless-functions/main/netlify/functions/data.json"
    );
    let data = await response.json();
    var arr = Object.values(data);
    for (var i in arr) {
      abv.push(arr[i]["abv"]);
    }

    for (const valeur of abv) {
      if (dict[valeur] === undefined) {
        dict[valeur] = 1;
        global.push({ id: valeur, value: 1 });
      } else {
        dict[valeur]++;
        global.push({ id: valeur, value: dict[valeur] });
      }
    }

    console.log(global);
    return abv;
  })();

  // Always set FusionCharts as the first parameter
  // fcRoot(FusionCharts, Charts, FusionTheme);

  // const dataSource = {
  //   chart: {
  //     caption: "Countries With Most Oil Reserves [2017-18]",
  //     subCaption: "In MMbbl = One Million barrels",
  //     xAxisName: "Country",
  //     yAxisName: "Reserves (MMbbl)",
  //     numberSuffix: "K",
  //     theme: "fusion",
  //   },
  //   data: dict,
  // };

  // const chartConfigs = {
  //   type: "column2d",
  //   width: 600,
  //   height: 400,
  //   dataFormat: "json",
  //   dataSource: dataSource,
  // };

  let data_for_chart = [];
</script>

<!-- <div
  class="grid grid-cols-4 grid-rows-3 gap-4 place-items-center bg-red-600 p-8"
>
  <div><Card>caca</Card></div>
  <div><Card>caca</Card></div>
  <div><Card>caca</Card></div>
  <div class="col-span-2 row-span-2 row-start-2">
    <Card
      >{#await fetchdata}
        <p>...waiting</p>
      {:then data}
        <div><SvelteFC {...chartConfigs} /></div>
      {:catch error}
        <p>An error occurred!</p>
      {/await}</Card
    >
  </div>
</div> -->

<!-- GRADIENT SPINNER
<div class="spinner-box">
  <div class="circle-border">
    <div class="circle-core" />
  </div>
</div> -->

<!-- SPINNER ORBITS -->
<div class="mt-20">
  <Projects
    title="Cardiovascular Disease Notebook"
    content="This notebook presents a logistic regression on cardiovascular disease dataset"
    img={cardio_disease}
    link="https://github.com/clement-massit/Cardiovascular_disease"
    target="_blank"
  />
  <Projects
    title="Mass Shooting Visualization (D3.js)"
    content="The objective of our project is to visualize and analyze some datas concerning mass shootings in the USA.
The dashboard helps to understand some data concerning mass shootings"
    img={mass_shooting}
    link="https://github.com/clement-massit/Data732_Mass_Shooting"
    target="_blank"
  />
  <Projects
    title="Bard API Test"
    content="The objective of our project is to visualize and analyze some datas concerning mass shootings in the USA.
The dashboard helps to understand some data concerning mass shootings"
    img={mass_shooting}
    link="/Bard"
    target="_self"
  />
</div>

<!-- <div>
  <div class="spinner-box">
    <div class="blue-orbit leo" />

    <div class="green-orbit leo" />

    <div class="red-orbit leo" />

    <div class="white-orbit w1 leo" />
    <div class="white-orbit w2 leo" />
    <div class="white-orbit w3 leo" />
  </div>
  <div><h1>Coming soon ...</h1></div>
</div> -->

<!-- GRADIENT CIRCLE PLANES -->
<!-- <div class="spinner-box">
  <div class="leo-border-1">
    <div class="leo-core-1" />
  </div>
  <div class="leo-border-2">
    <div class="leo-core-2" />
  </div>
</div> -->

<!-- SPINNING SQUARES -->
<!-- <div class="spinner-box">
  <div class="configure-border-1">
    <div class="configure-core" />
  </div>
  <div class="configure-border-2">
    <div class="configure-core" />
  </div>
</div> -->

<!-- LOADING DOTS... -->
<!-- <div class="spinner-box">
  <div class="pulse-container">
    <div class="pulse-bubble pulse-bubble-1" />
    <div class="pulse-bubble pulse-bubble-2" />
    <div class="pulse-bubble pulse-bubble-3" />
  </div>
</div> -->

<!-- SOLAR SYSTEM -->
<!-- <div class="spinner-box">
  <div class="solar-system">
    <div class="earth-orbit orbit">
      <div class="planet earth" />
      <div class="venus-orbit orbit">
        <div class="planet venus" />
        <div class="mercury-orbit orbit">
          <div class="planet mercury" />
          <div class="sun" />
        </div>
      </div>
    </div>
  </div>
</div> -->

<!-- Three Quarter Spinner -->

<!-- <div class="spinner-box">
  <div class="three-quarter-spinner" />
</div> -->

<style>
  /* KEYFRAMES */

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(359deg);
    }
  }

  @keyframes spin3D {
    from {
      transform: rotate3d(0.5, 0.5, 0.5, 360deg);
    }
    to {
      transform: rotate3d(0deg);
    }
  }

  @keyframes configure-clockwise {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes configure-xclockwise {
    0% {
      transform: rotate(45deg);
    }
    25% {
      transform: rotate(-45deg);
    }
    50% {
      transform: rotate(-135deg);
    }
    75% {
      transform: rotate(-225deg);
    }
    100% {
      transform: rotate(-315deg);
    }
  }

  @keyframes pulse {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0.25;
      transform: scale(0.75);
    }
  }

  /* GRID STYLING */

  * {
    box-sizing: border-box;
  }

  .spinner-box {
    margin-top: 25vh;
    margin-bottom: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }

  /* SPINNING CIRCLE */
  /*
  .leo-border-1 {
    position: absolute;
    width: 150px;
    height: 150px;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: rgb(63, 249, 220);
    background: linear-gradient(
      0deg,
      rgba(63, 249, 220, 0.1) 33%,
      rgba(63, 249, 220, 1) 100%
    );
    animation: spin3D 1.8s linear 0s infinite;
  }

  .leo-core-1 {
    width: 100%;
    height: 100%;
    background-color: #37474faa;
    border-radius: 50%;
  }

  .leo-border-2 {
    position: absolute;
    width: 150px;
    height: 150px;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: rgb(251, 91, 83);
    background: linear-gradient(
      0deg,
      rgba(251, 91, 83, 0.1) 33%,
      rgba(251, 91, 83, 1) 100%
    );
    animation: spin3D 2.2s linear 0s infinite;
  }

  .leo-core-2 {
    width: 100%;
    height: 100%;
    background-color: #1d2630aa;
    border-radius: 50%;
  }
*/
  /* ALTERNATING ORBITS */
  /*
  .circle-border {
    width: 150px;
    height: 150px;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: rgb(63, 249, 220);
    background: linear-gradient(
      0deg,
      rgba(63, 249, 220, 0.1) 33%,
      rgba(63, 249, 220, 1) 100%
    );
    animation: spin 0.8s linear 0s infinite;
  }

  .circle-core {
    width: 100%;
    height: 100%;
    background-color: #1d2630;
    border-radius: 50%;
  }
*/
  /* X-ROTATING BOXES */
  /*
  .configure-border-1 {
    width: 115px;
    height: 115px;
    padding: 3px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fb5b53;
    animation: configure-clockwise 3s ease-in-out 0s infinite alternate;
  }

  .configure-border-2 {
    width: 115px;
    height: 115px;
    padding: 3px;
    left: -115px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(63, 249, 220);
    transform: rotate(45deg);
    animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;
  }

  .configure-core {
    width: 100%;
    height: 100%;
    background-color: #1d2630;
  }
*/
  /* PULSE BUBBLES */
  /*
  .pulse-container {
    width: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .pulse-bubble {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #3ff9dc;
  }

  .pulse-bubble-1 {
    animation: pulse 0.4s ease 0s infinite alternate;
  }
  .pulse-bubble-2 {
    animation: pulse 0.4s ease 0.2s infinite alternate;
  }
  .pulse-bubble-3 {
    animation: pulse 0.4s ease 0.4s infinite alternate;
  }
*/
  /* SOLAR SYSTEM */
  /*
  .solar-system {
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .orbit {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #fafbfc;
    border-radius: 50%;
  }

  .earth-orbit {
    width: 165px;
    height: 165px;
    -webkit-animation: spin 12s linear 0s infinite;
  }

  .venus-orbit {
    width: 120px;
    height: 120px;
    -webkit-animation: spin 7.4s linear 0s infinite;
  }

  .mercury-orbit {
    width: 90px;
    height: 90px;
    -webkit-animation: spin 3s linear 0s infinite;
  }

  .planet {
    position: absolute;
    top: -5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #3ff9dc;
  }

  .sun {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #ffab91;
  }
*/
  .leo {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  .blue-orbit {
    width: 350px;
    height: 350px;
    border: 5px solid #0e3143b4;
    -webkit-animation: spin3D 5s linear 0.2s infinite;
  }

  .green-orbit {
    width: 285px;
    height: 285px;
    border: 5px solid #116b93;
    -webkit-animation: spin3D 3s linear 0s infinite;
  }

  .red-orbit {
    width: 200px;
    height: 200px;
    border: 4px solid #34b2df;
    -webkit-animation: spin3D 1s linear 0s infinite;
  }

  .white-orbit {
    width: 80px;
    height: 80px;
    border: 3px solid #c0e7f7;
    -webkit-animation: spin3D 8s linear 0s infinite;
  }

  /* .blue-orbit {
    width: 165px;
    height: 165px;
    border: 1px solid #91daffa5;
    -webkit-animation: spin3D 3s linear 0.2s infinite;
  }

  .green-orbit {
    width: 120px;
    height: 120px;
    border: 1px solid #91ffbfa5;
    -webkit-animation: spin3D 2s linear 0s infinite;
  }

  .red-orbit {
    width: 90px;
    height: 90px;
    border: 1px solid #ffca91a5;
    -webkit-animation: spin3D 1s linear 0s infinite;
  }

  .white-orbit {
    width: 60px;
    height: 60px;
    border: 2px solid #ffffff;
    -webkit-animation: spin3D 10s linear 0s infinite;
  } */

  .w1 {
    transform: rotate3D(1, 1, 1, 90deg);
  }

  .w2 {
    transform: rotate3D(1, 2, 0.5, 90deg);
  }

  .w3 {
    transform: rotate3D(0.5, 1, 2, 90deg);
  }
  /*
  .three-quarter-spinner {
    width: 50px;
    height: 50px;
    border: 3px solid #fb5b53;
    border-top: 3px solid transparent;
    border-radius: 50%;
    animation: spin 0.5s linear 0s infinite;
  }*/
</style>
