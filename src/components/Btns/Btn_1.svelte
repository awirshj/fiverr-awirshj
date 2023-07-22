<script>
  // Component logic
  export let booleanDependent = false;
  export let extraTailwindStyle = "";
  export let contentBtn = "";
</script>

<!-- Component markup -->
<button
  class="{extraTailwindStyle} cursor-pointer rounded-lg border-[2.5px] border-solid bg-transparent px-5 py-[6px] transition-all duration-300 hover:border-[#1dbf73] hover:bg-[#1dbf73] hover:bg-opacity-50 {booleanDependent
    ? 'border-greenLightDot text-greenLightDot hover:bg-opacity-5'
    : 'border-white border-opacity-75 text-white'}">{contentBtn}</button
>

<style>
  /* Component styles */
</style>
