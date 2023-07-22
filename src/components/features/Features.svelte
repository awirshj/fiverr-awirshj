<script>
  import checkedIcon from "../../assets/check.png";
  import featuresVideo from "../../assets/featuresVideo.mp4";
  const featuresItem = [
    {
      subH: "The best for every budget",
      desc: "Find high-quality services at every price point. No hourly rates, just project-based pricing.",
    },
    {
      subH: "Quality work done quickly",
      desc: "Find the right freelancer to begin working on your project within minutes.",
    },
    {
      subH: "Protected payments, every time",
      desc: "Always know what you'll pay upfront. Your payment isn't released until you approve the work.",
    },
    {
      subH: " 24/7 support",
      desc: "Find high-quality services at every price point. No hourly rates, just project-based pricing",
    },
  ];
  // Component logic
</script>

<!-- Component markup -->
<seaction
  id="features"
  class="bgred !mt-0 flex justify-center bg-bgWhiteLightGray py-24"
>
  <div class="flex max-w-6xl items-center gap-20 2xl:max-w-[1400px]">
    <article class="flex w-2/5 flex-grow-[2] flex-col gap-3 font-Montserrat">
      <header>
        <h2 class="mb-4 text-3xl font-bold text-gray-800">
          A whole world of freelance talent at your fingertips
        </h2>
      </header>
      {#each featuresItem as fItem}
        <div
          class="feauturesItemStyle group/fItem hover:!border-opacity-30 hover:!bg-opacity-20"
        >
          <h3
            class="title flex items-center gap-2 text-lg font-medium text-gray-700"
          >
            <img
              class="h-6 w-6 cursor-pointer"
              src={checkedIcon}
              alt="checked icon "
            />
            {fItem.subH}
          </h3>
          <p
            class="ml-5 text-base tracking-wide text-gray-600 opacity-80 group-hover/fItem:opacity-100 2xl:text-lg"
          >
            {fItem.desc}
          </p>
        </div>
      {/each}
    </article>

    <figure
      class="item relative flex w-3/5 flex-grow-[3] flex-col gap-4 overflow-hidden rounded-md"
    >
      <!-- svelte-ignore a11y-media-has-caption -->
      <video
        class="w-[720px] cursor-pointer object-cover"
        src={featuresVideo}
        controls
        poster="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
        preload="none"
      >
        Sorry, your browser doesn't support embedded videos, but don't worry,
        you can
        <a
          href="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
          >download it</a
        >
        and watch it with your favorite video player`!
      </video>
    </figure>
  </div>
</seaction>

<style>
  /* Component styles */

  .feauturesItemStyle {
    @apply flex flex-col gap-2 rounded-xl border-2 border-solid border-slate-300 border-opacity-5 bg-slate-300 bg-opacity-10 p-3 transition-all;
  }
</style>
