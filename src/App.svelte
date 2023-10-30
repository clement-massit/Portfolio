<script>
  import AppBar from "./routes/AppBar.svelte";
  import { Router, Link, Route } from "svelte-routing";
  import Dashboard from "./routes/Dashboard.svelte";
  import Home from "./routes/Home.svelte";

  export let url = "";
</script>

<Router {url}>
  <nav>
    <AppBar />
  </nav>

  <div>
    <Route path="/Dashboard" component={Dashboard} />
    <Route path="/" component={Home} />
  </div>
</Router>

<style>
</style>
