<script>
  // Component logic
  import { Link } from "svelte-routing";
  export let card;
</script>

<!--   <a href={card?.url} target="_blank">
        <img
          loading="lazy"
          class="rounded-container-token h-full cursor-pointer object-cover"
          src={card.img}
          alt={card.title}
          title={card.desc}
        />
      </a> -->

<!-- Component markup -->
<Link
  to="/gigs?cat=design"
  class="relative !h-full w-[23%] shrink-0 snap-start overflow-hidden rounded-sm font-Montserrat text-white transition-all first:ml-6 last:mr-6 hover:drop-shadow-md"
>
  <img
    loading="lazy"
    src={card.img}
    class="rounded-container-token h-full cursor-pointer object-cover"
    alt={card.title}
    title={card.desc}
  />
  <span
    class="desc absolute left-3 top-4 -skew-x-2 rounded-md bg-black bg-opacity-30 px-1 text-base font-light"
    >{card.desc}</span
  >
  <span
    class="title absolute left-3 top-[41px] rounded-md bg-black bg-opacity-30 px-1 text-2xl font-semibold"
    >{card.title}</span
  >
</Link>

<style>
  /* Component styles */
</style>
