<script>
  import { onDestroy, onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  import { Link } from "svelte-routing";
  import Btn_1 from "../Btns/Btn_1.svelte";
  // Component logic

  const currentUser = {
    id: 1,
    username: "amir", // less than 16 letters
    isSeller: true,
    profileImg:
      "https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600",
  };

  /// active nav bar
  // 1) scrollY > 0
  let isScrolling = false;
  const isActiveFunc = () => {
    window.scrollY > 0 ? (isScrolling = true) : (isScrolling = false);
  };
  onMount(() => {
    window.addEventListener("scroll", isActiveFunc);
  });
  onDestroy(() => {
    window.removeEventListener("scroll", isActiveFunc);
  });
  // 2) get pathname, if we are not at home page -> activeNav
  let pathname;
  onMount(() => {
    // add handlers for change url in browser
    let oldPushState = history.pushState;
    history.pushState = function pushState() {
      let ret = oldPushState.apply(this, arguments);
      window.dispatchEvent(new Event("locationchange"));
      return ret;
    };

    let oldReplaceState = history.replaceState;
    history.replaceState = function replaceState() {
      let ret = oldReplaceState.apply(this, arguments);
      window.dispatchEvent(new Event("locationchange"));
      return ret;
    };

    window.addEventListener("popstate", () => {
      window.dispatchEvent(new Event("locationchange"));
    });
    window.addEventListener("locationchange", (e) => {
      pathname = window.location.pathname;
      console.log("locationchange");
    });
  });
  $: pathname = window.location.pathname;
  // 3)  set activeNav and use it for style
  $: activeNav = isScrolling || pathname !== "/";
  /// open user menu
  let userMenuOpen = false;
</script>

<!-- Component markup -->

<nav
  class=" font-Montserrat h-fit w-full text-center transition-all duration-500 ease-in-out {activeNav
    ? 'navbar--active'
    : 'bg-darkGreenPrimary text-white '}"
>
  <div
    class=" mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 py-3 2xl:max-w-[1480px]"
  >
    <Link to="/" class="logo group cursor-pointer text-4xl font-bold">
      <span class="text {activeNav ? 'text-gray-800' : ''}">fiverr</span><span
        class="text-greenLightDot text-5xl opacity-75 transition-all group-hover:opacity-100"
        >.</span
      >
    </Link>
    <div
      class="{activeNav
        ? 'font-medium text-gray-700   '
        : ''} flex items-center gap-[18px] text-base font-medium 2xl:font-semibold"
    >
      <ul class="flex items-center gap-[18px]">
        {#each ["Liverr Business", "Explore", "English"] as linkText}
          <li class="cursor-pointer transition hover:-translate-y-[2px]">
            {linkText}
          </li>
        {/each}
        {#if !currentUser?.isSeller}
          <li class="cursor-pointer transition hover:-translate-y-[2px]">
            Become a Seller
          </li>
        {/if}
      </ul>

      {#if !currentUser}
        <li class="cursor-pointer transition hover:-translate-y-[2px]">
          Sign in
        </li>
        <Btn_1 booleanDependent={activeNav} contentBtn={"join"} />
      {:else}
        <!-- user had login -->
        <div class="user relative flex items-center gap-4">
          <figure class="h-12 w-12">
            <img
              src={currentUser?.profileImg}
              alt="user profile"
              class=" h-full w-full rounded-full object-cover"
            />
          </figure>
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <span
            class="hover:border-greenLightDot cursor-pointer transition-all hover:border-b-[1px] hover:border-solid"
            on:click={() => (userMenuOpen = !userMenuOpen)}
            >{currentUser?.username}</span
          >
          {#if userMenuOpen}
            <ul
              out:fade={{ duration: 150 }}
              in:fly={{ y: 100, duration: 500 }}
              class="userOptions"
            >
              {#if currentUser?.isSeller}
                <Link to="/mygigs" class="w-full cursor-pointer">Gigs</Link>
                <Link
                  to="/addgig"
                  class=" flex w-full cursor-pointer flex-nowrap items-center gap-[3px]"
                >
                  <span>Add</span> <span>New</span> <span>Gig</span>
                </Link>
              {/if}
              <Link to="/orders" class="w-full cursor-pointer">Orders</Link>
              <Link to="messages" class="w-full cursor-pointer">Messages</Link>
              <Link to="/" class="w-full cursor-pointer">Logout</Link>
            </ul>
          {/if}
        </div>
      {/if}
    </div>
  </div>
  {#if activeNav || pathname !== "/"}
    <div>
      <hr />
      <div class="menu 2xl:!gap-8 2xl:!text-base 2xl:font-medium">
        {#each ["Graphics & Design", "Video & Animation", "Writing & Translation", "AI Services", "Digital Marketing", "Music & Audio", "Programming & Tech", "Business", "Lifestyle"] as catg}
          <a
            href="#top"
            class="link text-inherit opacity-75 transition-all hover:opacity-100 2xl:opacity-90"
            >{catg}</a
          >
        {/each}
      </div>
    </div>
  {/if}
  <hr />
</nav>

<style>
  /* Component styles */
  .menu {
    @apply flex items-center justify-center gap-5 py-2 text-center text-sm  text-gray-800;
  }
  .navbar--active {
    @apply sticky top-0 z-50 bg-[#fcfcfc] opacity-95 transition-all duration-500;
  }
  .userOptions {
    @apply absolute -right-4  top-[50px] z-50  flex  flex-col gap-4 rounded-xl bg-[#f8f8f8] px-9 py-6 pt-5 text-sm text-gray-800 drop-shadow-xl transition-all;
    /* flex */
  }
  :global(body) {
    overflow-x: hidden;
  }
</style>
