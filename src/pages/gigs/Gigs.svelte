<script>
  // @ts-nocheck

  import { fade, fly } from "svelte/transition";
  import arrDown from "../../assets/down.png";
  import Btn_2 from "../../components/Btns/Btn_2.svelte";
  import { gigs } from "../../store";
  import GigCard from "../../components/gigCard/GigCard.svelte";
  // Component logic
  /// open sort menu
  let sortMenuIsOpen = false;
  let sortGigs = "Newest";
  /**
   * @param {string} sortType
   */
  function reSortGigs(sortType) {
    sortGigs = sortType;
    sortMenuIsOpen = false;
  }
</script>

<!-- Component markup -->
<div class="gigs flex w-full justify-center px-4 font-Montserrat">
  <div class="container flex w-[1400px] flex-col gap-3 py-8">
    <span class="breadCrumbs text-sm font-light uppercase text-gray-400">
      FIVERR <span class="font-semibold text-gray-800">{`>`}</span> GRAPHICS &
      DESIGN
      <span class="font-semibold text-gray-800">{`>`}</span></span
    >
    <h1 class="mt-5 text-3xl font-bold">AI artists</h1>
    <p class="mb-8 font-light text-gray-400">
      Explore the boudaries of art and technology with Fiverr's AI artists
    </p>
    <div class="menu mb-8 flex flex-wrap items-center justify-between gap-6">
      <div
        class="left flex flex-wrap items-center gap-4 font-light text-gray-500"
      >
        <span>Budget</span>
        <div class="flex flex-nowrap items-center gap-3">
          <input
            class="rounded-md border-2 border-solid border-gray-300 px-2 py-1 text-gray-700 outline-none placeholder:text-gray-300 focus:border-gray-600"
            type="text"
            placeholder="min"
          />
          <input
            class="rounded-md border-2 border-solid border-gray-300 px-2 py-1 text-gray-700 outline-none placeholder:text-gray-300 focus:border-gray-600"
            type="text"
            placeholder="max"
          />
        </div>
        <button
          class="cursor-pointer
          rounded-md border-2 border-solid border-green-800 border-opacity-20
          bg-greenLightDot bg-opacity-75 px-5 py-[5px] font-Montserrat font-semibold text-white transition-all hover:border-opacity-40 hover:bg-opacity-100"
          >Apply</button
        >
      </div>
      <div class="relative ml-auto flex items-center gap-3">
        <span class="sortBy text-sm font-light text-gray-500">sort by</span>
        <span class="sortType font-medium text-gray-700 drop-shadow-md"
          >{sortGigs}</span
        >
        <button
          class="h-auto w-5 cursor-pointer"
          on:click={() => (sortMenuIsOpen = !sortMenuIsOpen)}
        >
          <img
            class="{sortMenuIsOpen
              ? 'sortMenuArrow'
              : ''} h-full w-full cursor-pointer object-cover transition-all"
            src={arrDown}
            alt="arrow down"
          />
        </button>
        {#if sortMenuIsOpen}
          <ul
            in:fly={{ y: 80, duration: 500 }}
            out:fade={{ duration: 150 }}
            class="rightMenu absolute right-0 top-8 z-10 flex flex-col items-center gap-4 rounded-md border-[1px] border-solid border-gray-300 bg-white px-8 py-5 font-medium text-gray-600 drop-shadow-lg"
          >
            {#each ["Best Selling", "Newest", "Popular"] as sortOptions}
              <li
                class="cursor-pointer {sortOptions === sortGigs
                  ? 'border-b-2 border-gray-200'
                  : ''}"
              >
                <button
                  on:click={() => reSortGigs(sortOptions)}
                  class="whitespace-nowrap">{sortOptions}</button
                >
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    </div>

    <div class="cards flex flex-wrap gap-6">
      {#each $gigs as gigData, i}
        <GigCard item={gigData} key={gigData.id} />
      {/each}
    </div>
  </div>
</div>

<style>
  /* Component styles */
  .sortMenuArrow {
    transition: all 0.3s ease-out;
    transform: rotateZ(180deg);
  }
</style>
