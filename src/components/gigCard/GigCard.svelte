<script>
  export let item;
  import { Link } from "svelte-routing";
  import starImg from "../../assets/star.png";
  import heartImg from "../../assets/heart.png";

  // Component logic
</script>

<!-- Component markup -->
<Link to="/gig/123" class="mx-auto">
  <div
    class="gigCard mb-10 h-[420px] w-80 overflow-hidden rounded-b-md rounded-t-xl border-[0.5px] border-solid border-[rgb(228,228,228)] bg-bgWhite font-Montserrat transition-all hover:-translate-y-1 hover:shadow-lg"
  >
    <img src={item.img} class="!h-1/2 w-full object-cover" alt="" />
    <div class="flex flex-col gap-3 px-5 py-3 pl-4">
      <div class="flex items-center gap-3">
        <img
          src={item.pp}
          alt="profile"
          class="!h-10 !w-10 rounded-full object-cover"
        />
        <span class="font-medium text-gray-800">{item.username}</span>
      </div>
      <p class="ml-2 text-base text-gray-700">{item.desc}</p>
      <div class="star ml-2 flex items-center gap-1">
        <img class="mb-1 !h-4 !w-4" src={starImg} alt="star" />
        <span class="text-sm font-bold text-goldStar">{item.star}</span>
      </div>
    </div>
    <hr class="h-0 border-[0.3px] border-solid border-[rgb(228,228,228)]" />
    <div class="detail flex items-center justify-between px-5 py-3">
      <img
        src={heartImg}
        class="!h-4 !w-4 cursor-pointer object-cover"
        alt="heart"
      />
      <div class="price flex items-center gap-2 text-sm text-gray-500">
        <span class="text-xs">STARTING AT</span>
        <h2
          class="flex items-center gap-[2px] text-end text-lg font-semibold text-red-400"
        >
          <span class="text-sm italic">$</span>
          {item.price}
        </h2>
        <sup class="text-xs font-light italic text-red-500">99</sup>
      </div>
    </div>
  </div></Link
>

<style>
  img {
    @apply h-1/2 w-full object-cover;
  }
  /* Component styles */
</style>
