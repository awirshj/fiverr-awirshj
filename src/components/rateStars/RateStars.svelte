<script >
  export let starNum // 4.9
  export let rateNum // 218
  import starImg from "../../assets/star.png";
  // Component logic
  const stars = Array(5).fill(0, 0, starNum);
</script>

<figure class="font-Montserrat group flex flex-nowrap items-center gap-[7px]">
  <img
    class="!h-4 !w-4 cursor-pointer object-cover transition-all duration-500 group-hover:scale-[135%]"
    src={starImg}
    alt="star"
  />
  <figcaption class="flex items-center gap-[2px]">
    <span class="text-sm font-bold text-gray-800">{starNum}</span><span
      class="font-medium text-gray-500 opacity-90">({rateNum})</span
    >
  </figcaption>
</figure>

<!-- Component markup -->

<style>
  /* Component styles */
</style>
