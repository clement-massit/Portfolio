<script>
  import Cv from "../components/CV.svelte";
</script>

<div class="container">
  <div class="about mr-10">
    <h1 class="text-left text-shakespeare-900 font-bold">ABOUT</h1>
    <br />
    <div class="text">
      <p>Hi, I'm Clément.</p>

      <p>
        I am a junior data scientist passionate about data science and using
        technology to solve complex problems. My job consists in analyze and
        manipulates datasets in order to extract knowledge and identify trends.
      </p>
      <p>
        I am skilled for data pre-processing, development of predictive models,
        building statistical methods, or data visualization.
      </p>

      <br />
      <p>
        I am currently at the University of Bordeaux working in Bordeaux
        Population Health as data scientist.
      </p>
    </div>
  </div>

  <div class="cv ml-10">
    <Cv />
  </div>
</div>

<style>
  .container {
    height: 100%;
    width: 100%;
    justify-content: left;
    align-items: center;
    text-align: justify;
    margin-top: 15vh;
    margin-bottom: 15vh;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 15px 30px;
    grid-template-areas: "about cv";
  }

  .text {
    text-align: justify;
    font-size: large;
  }
  .about {
    grid-area: about;
  }
  .cv {
    grid-area: cv;
  }
</style>
