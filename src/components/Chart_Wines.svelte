<script>
  import FusionCharts from "fusioncharts";
  import Charts from "fusioncharts/fusioncharts.charts";
  import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
  import SvelteFC, { fcRoot } from "svelte-fusioncharts";
  import { Card } from "flowbite-svelte";

  export let data;

  // Always set FusionCharts as the first parameter
  fcRoot(FusionCharts, Charts, FusionTheme);
  //STEP 2 : preparing the chart Data

  //STEP 3: Create your configuration object
  const chartConfigs = {
    type: "column2d", //Select the chart type
    width: 600, //Set the width of the chart
    height: 400, //Set the height of the chart
    dataFormat: "json", //Set the input dataFormat to json
    dataSource: {
      chart: {
        caption:
          "Year in which the grapes were harvested grouped by the number of bottles",
        subCaption: "",
        xAxisName: "Years", //Assign a relevant name to your x-axis
        yAxisName: "Count ", //Assign a relevant name to your y-axis
        theme: "fusion", //Apply a theme to your chart
      },
      //Include chartData from STEP 2
      data: data,
    },
  };
</script>

<SvelteFC {data} {...chartConfigs} />
