<script>
  import AppBar from "./components/AppBar.svelte";
  import { Router, Link, Route } from "svelte-routing";
  import Dashboard from "./routes/Dashboard.svelte";
  import Home from "./routes/Home.svelte";
  import Footer from "./components/Footer.svelte";
  import About from "./routes/About.svelte";
  import Background from "./components/Background.svelte";
  import Wine from "./components/Wine.svelte";
  import Unreal from "./components/Unreal.svelte";
  export let url = "";
</script>

<main>
  <Router {url}>
    <nav>
      <AppBar />
    </nav>
    <Route path="/Projects" component={Dashboard} />
    <Route path="/About" component={About} />
    <Route path="/Wine" component={Wine} />
    <Route path="/unreal" component={Unreal} />

    <Route path="/" component={Home} />
    <Footer />
  </Router>
  <Background />
</main>

<style>
</style>
