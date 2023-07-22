<script>
  // Component logic
  import { trustedByLogoSrc } from "../../store";
</script>

<!-- Component markup -->
<section id="trustedBy" class="flex h-24 justify-center bg-bgWhite">
  <div class="flex max-w-3xl items-center gap-8 font-medium">
    <span class="mr-8 font-Montserrat text-lg text-gray-600 opacity-70"
      >Trusted by:</span
    >
    {#each $trustedByLogoSrc as { src, name }}
      <img class="h-14 cursor-pointer object-contain" {src} alt={name} />
    {/each}
  </div>
</section>

<style>
  /* Component styles */
</style>
