<script>
  import Particles from "svelte-particles";
  //import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
  import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

  let particlesUrl = "http://foo.bar/particles.json"; // placeholder, replace it with a real url

  let particlesConfig = {
    particles: {
      color: {
        value: "#1486b5",
      },
      links: {
        enable: true,
        color: "#1486b5",
      },
      move: {
        enable: true,
      },
      number: {
        value: 100,
      },
    },
  };

  let onParticlesLoaded = (event) => {
    const particlesContainer = event.detail.particles;

    // you can use particlesContainer to call all the Container class
    // (from the core library) methods like play, pause, refresh, start, stop
  };

  let particlesInit = async (engine) => {
    // you can use main to customize the tsParticles instance adding presets or custom shapes
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  };
</script>

<!-- <Particles
  id="tsparticles"
  class="foo bar"
  style=""
  options={particlesConfig}
  on:particlesLoaded={onParticlesLoaded}
  {particlesInit}
/> -->
<div id="tsparticles"></div>

<!-- or -->

<!-- <Particles
  id="tsparticles"
  class="foo bar"
  style=""
  url={particlesUrl}
  on:particlesLoaded={onParticlesLoaded}
  {particlesInit}
/> -->

<style>
  :global(#tsparticles) {
    margin: 0;
    padding: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -2;
    background: linear-gradient(#30b3df, #e3f2fb);
  }
</style>
