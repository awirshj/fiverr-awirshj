<script>
  // Component logic
  import manImg from "../../assets/man.png";
  import searchImg from "../../assets/search.png";
  import Btn_2 from "../Btns/Btn_2.svelte";
</script>

<!-- Component markup -->

<section
  id="featured"
  class="flex h-[600px] justify-center bg-darkGreenPrimary font-Montserrat text-white"
>
  <div class="flex max-w-[1400px] items-center gap-8 px-6 2xl:max-w-[1500px]">
    <article class="z-10 flex w-3/4 flex-col gap-16">
      <header>
        <h1
          class="text-5xl font-bold
         leading-snug tracking-wide 2xl:text-[55px]"
        >
          Find the right <span
            class="border-spacing-0 border-b-2 border-solid border-slate-100 border-opacity-40
             font-normal italic">freelance service,</span
          > right away
        </h1>
      </header>
      <div
        class="search flex items-center justify-between gap-2 overflow-hidden rounded-md bg-white"
      >
        <div class="flex h-full w-full items-center">
          <img src={searchImg} alt="search button" class="m-3 h-5 w-5" />
          <input
            type="text"
            class="h-full w-full rounded-md border-none px-4 py-2 font-Montserrat text-gray-900 outline-slate-300
            placeholder:text-gray-700"
            placeholder="Try 'building mobile app'..."
          />
        </div>
        <Btn_2
          contentBtn="search"
          extraTailwindStyle={"self-end !border-0 text-lg"}
        />
      </div>
      <div
        class="popular flex max-w-fit items-center gap-3 font-Montserrat font-medium"
      >
        <span>Popular:</span>
        <ul class="flex items-center gap-4">
          <li>
            <button
              class="transition-all hover:!border-opacity-100 hover:!bg-slate-50
              hover:!bg-opacity-10 hover:!opacity-100 hover:!drop-shadow-xl"
              >Web Design</button
            >
          </li>
          <li>
            <button
              class="transition-all hover:!border-opacity-100 hover:!bg-slate-50 hover:!bg-opacity-10
              hover:!opacity-100 hover:!drop-shadow-xl">WordPress</button
            >
          </li>
          <li>
            <button
              class="transition-all hover:!border-opacity-100 hover:!bg-slate-50
              hover:!bg-opacity-10
              hover:!opacity-100 hover:!drop-shadow-xl">Logo Design</button
            >
          </li>
          <li>
            <button
              class="transition-all hover:!border-opacity-100 hover:!bg-slate-50
              hover:!bg-opacity-10
              hover:!opacity-100 hover:!drop-shadow-xl">AI Services</button
            >
          </li>
        </ul>
      </div>
    </article>
    <figure class="z-0 h-full w-6/12">
      <img class="h-full object-cover" src={manImg} alt="a good guy img :))" />
    </figure>
  </div>
</section>

<style>
  /* Component styles */
  .popular button {
    @apply max-w-fit rounded-2xl border-2 border-solid border-white border-opacity-40 bg-transparent px-3 py-1 text-sm tracking-wide text-white opacity-80;
  }
  .popular li {
    @apply flex items-center justify-center;
  }
</style>
