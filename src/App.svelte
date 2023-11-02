<script>
  import AppBar from "./routes/AppBar.svelte";
  import { Router, Link, Route } from "svelte-routing";
  import Dashboard from "./routes/Dashboard.svelte";
  import Home from "./routes/Home.svelte";
  import Footer from "./components/Footer.svelte";
  import About from "./routes/About.svelte";

  export let url = "";
</script>

<Router {url}>
  <nav>
    <AppBar />
  </nav>
  <Route path="/Dashboard" component={Dashboard} />
  <Route path="/About" component={About} />
  <Route path="/" component={Home} />
  <Footer />
</Router>

<style>
</style>
