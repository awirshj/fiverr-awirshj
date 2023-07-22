<script>
  export let card = {};

  // Component logic
</script>

<!-- Component markup -->
<div
  class=" group h-80 w-80 shrink-0 cursor-pointer snap-start overflow-hidden rounded-md border-2 border-solid border-[rgb(255,255,255)] font-Montserrat transition-all duration-300 first:ml-6 last:mr-6"
>
  <img src={card.img} class="h-4/5 w-full object-cover" alt="project" />
  <div class="flex items-center gap-5 p-4">
    <img src={card.pp} alt="" class="h-11 w-11 rounded-full object-cover" />
    <div class="">
      <h2 class="text-sm font-medium">{card.cat}</h2>
      <span class="text-sm text-gray-800 opacity-90">{card.username}</span>
    </div>
  </div>
</div>

<style>
  /* Component styles */
</style>
