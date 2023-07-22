<script>
  // Component logic
  export let extraTailwindStyle = "";
  export let contentBtn = "";
</script>

<!-- Component markup -->
<button
  class="min-h-[48px] min-w-[128px] cursor-pointer border-2 border-solid border-green-900 border-opacity-40 bg-greenLightDot bg-opacity-75
   px-2 py-1 text-base font-semibold tracking-wide text-white transition-all hover:border-opacity-100 hover:bg-opacity-90 {extraTailwindStyle}"
  >{contentBtn}</button
>

<style>
  /* Component styles */
</style>
