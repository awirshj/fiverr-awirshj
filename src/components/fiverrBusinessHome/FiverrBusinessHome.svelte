<script>
  // Component logic

  import Btn_2 from "../Btns/Btn_2.svelte";
  import checkedIcon from "../../assets/check.png";
</script>

<!-- Component markup -->

<section id="fiverrBusiness" class="bg-bgBlueDark px-8 py-24">
  <div
    class="mx-auto flex max-w-[1400px] flex-col-reverse items-center gap-8 font-Montserrat md:flex-row 2xl:max-w-[1480px]"
  >
    <article
      class="flex flex-col items-center gap-8 self-start font-Montserrat text-white md:w-6/12 md:items-start"
    >
      <header>
        <h2 class="mb-10 flex items-center gap-[6px] text-[33px] font-bold">
          fiverr <span class="font-normal tracking-tight">business.</span>
          <span
            class="bg-[rgb(88, 74, 255)] rounded-2xl bg-red-500 px-[6px] py-[2px] text-xs tracking-wide"
            >NEW</span
          >
        </h2>
        <h1 class=" break-keep text-3xl font-semibold">
          A solution built for <span
            class="border-spacing-0 border-b-2 border-solid border-slate-100 border-opacity-40 font-normal italic"
            >business</span
          >
        </h1>
      </header>
      <p class="text-base font-medium opacity-90">
        Upgrade to a curated experience to access vetted talent and exclusive
        tools
      </p>

      <ul class="flex flex-col items-start gap-4">
        {#each ["Talent matching", "Dedicated account management", "Team collaboration tools", "Business payment solutions"] as el}
          <li
            class="group flex flex-nowrap items-center gap-2 transition-all hover:-translate-x-1"
          >
            <img
              src={checkedIcon}
              alt="checked"
              class="h-6 w-6 cursor-pointer opacity-75 transition-all group-hover:opacity-100"
            /><span class="opacity-90 transition-all hover:opacity-100"
              >{el}</span
            >
          </li>
        {/each}
      </ul>
      <Btn_2
        contentBtn={"Explore Fiverr Business"}
        extraTailwindStyle="font-semibold tracking-wide rounded-2xl !px-4"
      />
    </article>

    <figure class=" md:w-8/12">
      <img
        src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
        class="object-cover"
        alt=""
      />
    </figure>
  </div>
</section>

<style>
  /* Component styles */
</style>
