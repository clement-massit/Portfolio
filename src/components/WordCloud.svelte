<script lang="ts">
  import d3Cloud from "d3-cloud";
  import { descending, extent, rollups } from "d3-array";

  export let text = "";

  const tokens = text.trim().split(";");

  const data = rollups(
    tokens,
    (g) => g.length,
    (w) => w.toLowerCase()
  )
    .sort(([, a], [, b]) => descending(a, b))
    .map(([key, size]) => ({ text: key, size }));

  const dimensions = {
    width: 350,
    height: 200,
    margin: {
      top: 24,
      right: 0,
      bottom: 0,
      left: 0,
    },
  };

  console.log(data);

  const wordPadding = 2;

  const cloudWords = [];

  const cloud = d3Cloud()
    .size([
      dimensions.width - dimensions.margin.left - dimensions.margin.right,
      dimensions.height - dimensions.margin.top - dimensions.margin.bottom,
    ])
    .words(data)
    .padding(wordPadding)
    .rotate(0)
    .font("Helvetica")
    .fontSize((d) => Math.sqrt(d.size))
    .on("word", ({ size, x, y, rotate, text }) => {
      cloudWords.push({ size, x, y, rotate, text });
    });

  cloud.start();

  const words = cloudWords;

  console.log(words);
</script>

<svg
  width={dimensions.width}
  height={dimensions.height}
  viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
  text-anchor="middle"
  font-family="Helvetica"
>
  <g transform={`translate(0 ${dimensions.margin.top})`}>
    {#each words as word}
      <text
        font-size={word.size}
        transform={`translate(${word.x}, ${word.y}) rotate(${word.rotate})`}
        fill="#CC2936">{word.text}</text
      >
    {/each}
  </g>
</svg>
