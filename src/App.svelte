<script>
  // @ts-nocheck
  // import "agnostic-svelte/css/common.min.css";

  // Component logic
  // @ts-ignore
  import { Router, Link, Route } from "svelte-routing";
  // Your selected Skeleton theme:
  // import "@skeletonlabs/skeleton/themes/theme-skeleton.css";

  // import "@skeletonlabs/skeleton/styles/skeleton.css";

  import Navbar from "./components/navbar/Navbar.svelte";
  import Home from "./pages/home/Home.svelte";
  import Gigs from "./pages/gigs/Gigs.svelte";
  import SingleGig from "./pages/singleGig/SingleGig.svelte";
  import Orders from "./pages/orders/Orders.svelte";
  import MyGigs from "./pages/myGigs/MyGigs.svelte";
  import Messages from "./pages/messages/Messages.svelte";
  import Message from "./pages/message/Message.svelte";
  import AddGig from "./pages/addGig/AddGig.svelte";
  import Footer from "./components/footer/Footer.svelte";
</script>

<!-- Component markup -->
<Router>
  <Navbar />
  <Route path="/" component={Home} />
  <Route path="/gigs" component={Gigs} />
  <Route path="/gig/:id" component={SingleGig} />
  <Route path="/orders" component={Orders} />
  <Route path="/mygigs" component={MyGigs} />
  <Route path="/addgig" component={AddGig} />
  <Route path="/messages" component={Messages} />
  <Route path="/message/:id" component={Message} />
  <Footer />
</Router>

<style>
  /* Component styles */
</style>
