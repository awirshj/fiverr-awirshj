<script>
  // stores
  import { catCardsData, projects } from "../../store";
  import CatCard from "../../components/catCard/CatCard.svelte";
  import Featured from "../../components/featured/Featured.svelte";

  import Footer from "../../components/footer/Footer.svelte";
  import Navbar from "../../components/navbar/Navbar.svelte";

  import TrustedBy from "../../components/trustedBy/TrustedBy.svelte";
  import MultiColCarousel from "../../components/muiltiColCarousel/MultiColCarousel.svelte";

  import Features from "../../components/features/Features.svelte";
  import FiverrBusinessHome from "../../components/fiverrBusinessHome/FiverrBusinessHome.svelte";
  import ProjectsCard from "../../components/projectsCard/ProjectsCard.svelte";

  // Component logic
</script>

<!-- Component markup -->
<!-- we have <Footer/>, <Navbar /> in every pages -->
<div class="home bg-bgWhite">
  <Featured />
  <TrustedBy />
  <section id="categoriesSlider" class=" bg-bgWhite !mb-0 w-full">
    <MultiColCarousel mxCards={24}>
      {#each $catCardsData as card (card.id)}
        <CatCard {card} />
      {/each}
    </MultiColCarousel>
  </section>

  <Features />
  <FiverrBusinessHome />
  <div class="py-20 pb-32">
    <MultiColCarousel mxCards={24}>
      {#each $projects as card (card.id)}
        <ProjectsCard {card} />
      {/each}
    </MultiColCarousel>

    <nav aria-label="breadcrumbs">
      <ol class="breadcrumb breadcrumb-bullet">
        <li class="breadcrumb-item"><a href="#top">Tennis</a></li>
        <li class="breadcrumb-item"><a href="#top">Superstars</a></li>
        <li class="breadcrumb-item active" aria-current="page">
          Serena Williams
        </li>
      </ol>
    </nav>
  </div>
</div>

<style>
  /* Component styles */
</style>
