<script >
  export let mxCards= 0;
  import arrLeft from "../../assets/arrLeft.svg";
  import arrRight from "../../assets/arrRight.svg";
  // Component logic
  let elemCards,
    leftBtn,
    rightBtn,
    isBtnHover = false,
    elemCardsIsHover = false;

  function multiColumnLeft() {
    // dont use px or mx for cards inside carousel
    let x = elemCards.scrollWidth;
    if (elemCards.scrollLeft !== 0)
      x = elemCards.scrollLeft - elemCards.clientWidth;
    if (Math.trunc(elemCards.scrollLeft + 1) === mxCards) {
      x = elemCards.clientWidth;
    }

    elemCards.scroll(x, 0);
  }
  function addTranlateToBtns() {
    leftBtn.classList.add("!translate-x-0");
    rightBtn.classList.add("!translate-x-0");
    elemCardsIsHover = true;
  }
  function removeTranlatefromBtns() {
    if (!elemCardsIsHover && !isBtnHover) {
      leftBtn.classList.remove("!translate-x-0");
      rightBtn.classList.remove("!translate-x-0");
    }
  }

  function multiColumnRight() {
    let x = 0;
    // -1 is used because different browsers use different methods to round scrollWidth pixels.
    if (
      elemCards.scrollLeft <
      elemCards.scrollWidth - elemCards.clientWidth - 1
    )
      x = elemCards.scrollLeft + elemCards.clientWidth;
    elemCards.scroll(x, 0);
  }
</script>

<!-- Component markup -->
<div
  class="mx-auto mb-16 grid w-10/12 max-w-[1400px] grid-cols-[auto_1fr_auto] gap-4"
>
  <!-- Button: Left -->
  <button type="button" class="btn-icon variant-fill cursor-auto">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <img
      on:click={multiColumnLeft}
      bind:this={leftBtn}
      on:mouseenter={() => (isBtnHover = true)}
      on:mouseleave={() => {
        isBtnHover = false;
        setTimeout(() => {
          if (!isBtnHover) {
            removeTranlatefromBtns();
          }
        }, 1000);
      }}
      class="h-10 w-10 translate-x-[200%] cursor-pointer rounded-full bg-slate-200 px-1 py-1 opacity-40 transition-all duration-500 ease-out hover:opacity-100"
      src={arrLeft}
      alt="left arr svg"
    />
  </button>
  <!-- Carousel -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    bind:this={elemCards}
    on:mouseenter={addTranlateToBtns}
    on:mouseleave={() => {
      elemCardsIsHover = false;
      setTimeout(() => {
        removeTranlatefromBtns();
      }, 5000);
    }}
    class=" sliderContainer z-10 flex h-full w-full snap-x snap-mandatory !items-stretch gap-8 overflow-x-auto scroll-smooth
    pb-3 pt-4"
  >
    <slot />
  </div>
  <!-- Button-Right -->
  <button
    type="button"
    class="btn-icon variant-filled cursor-auto"
    on:click={multiColumnRight}
  >
    <img
      class="h-10 w-10 -translate-x-[200%] cursor-pointer rounded-full bg-slate-200 px-1 py-1 opacity-40 transition-all duration-500 ease-out hover:opacity-100"
      src={arrRight}
      alt="left arr svg"
      bind:this={rightBtn}
      on:mouseenter={() => (isBtnHover = true)}
      on:mouseleave={() => {
        isBtnHover = false;
        setTimeout(() => {
          removeTranlatefromBtns();
        }, 1000);
      }}
    />
  </button>
</div>

<style>
  /* Component styles */
  /* style the scrollbar */
  .sliderContainer::-webkit-scrollbar {
    height: 5px;
    width: 55px;
    width: 55px;
    background-color: #f5f5f5;
  }
  .sliderContainer::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #777;
  }
  .sliderContainer::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #f5f5f5;
  }
</style>
