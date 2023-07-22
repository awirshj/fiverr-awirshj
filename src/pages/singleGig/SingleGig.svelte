<script>
  import SingleGig from "./SingleGig.svelte";
  import MultiColCarousel from "../../components/muiltiColCarousel/MultiColCarousel.svelte";
  import starImg from "../../assets/star.png";
  import likeImg from "../../assets/like.png";
  import disLikeImg from "../../assets/dislike.png";
  import greenCheckImg from "../../assets/greencheck.png";
  import recycleImg from "../../assets/recycle.png";
  import clockImg from "../../assets/clock.png";
  import RateStars from "../../components/rateStars/RateStars.svelte";
  import Btn_1 from "../../components/Btns/Btn_1.svelte";
  import Btn_2 from "../../components/Btns/Btn_2.svelte";
  // Component logic

  const reviews = [
    {
      profileImg:
        "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Gerner David",
      userCountry: {
        img: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        name: "United States",
      },
      reviewDesc:
        "I just want to say that art_with_ai was the first, and after this,the only artist Ill be using on Fiverr. Communication was amazing,each and every day he sent me images that I was free to requestchanges to. They listened, understood, and delivered above and beyond my expectations. I absolutely recommend this gig, and know already that Ill be using it again very very soon",
      rateStarNum: 5,
      rateAmountNum: 218,
    },
    {
      profileImg:
        "https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Sidney Owen",
      userCountry: {
        img: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png",
        name: "Germany",
      },
      reviewDesc:
        "The designer took my photo for my book cover to the next level! Professionalism and ease of working with designer along with punctuality is above industry standards!! Whatever your project is, you need this designer!",
      rateStarNum: 5,
      rateAmountNum: 218,
    },
    {
      profileImg:
        "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Lyle Giles",
      userCountry: {
        img: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        name: "United States",
      },
      reviewDesc:
        "Amazing work! Communication was amazing, each and every day he sent me images that I was free to request changes to. They listened, understood, and delivered above and beyond my expectations. I absolutely recommend this gig, and know already that Ill be using it again very very soon",
      rateStarNum: 5,
      rateAmountNum: 218,
    },
  ];
</script>

<!-- Component markup -->
<div class="gig font-Montserrat flex justify-center pb-44 pt-12">
  <div class="container flex w-[1400px] gap-14 px-1 py-8">
    <article class=" left flex w-3/4 flex-col gap-5 px-2">
      <span class="text-sm font-light uppercase text-gray-400"
        >LIVERR <span class=" text-xl font-bold text-gray-700 opacity-60"
          >{`>`}</span
        >
        GRAPHICS & DESIGN
        <span class="text-xl font-bold text-gray-700 opacity-60">{`>`}</span
        ></span
      >

      <header class="mt-12">
        <h1 class="mb-8 text-center text-4xl font-bold text-gray-600">
          I will create ai generated art for you
        </h1>
      </header>
      <MultiColCarousel mxCards={24}>
        {#each ["https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600", "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600", "https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"] as srcImg}
          <img
            class="max-h-[500px] w-full cursor-pointer snap-center object-cover"
            src={srcImg}
            alt=""
          />
        {/each}
      </MultiColCarousel>
      <h2 class="text-lg font-medium">About This Gig</h2>
      <p class="text-base">
        I use an AI program to create images based on text prompts. This means I
        can help you to create a vision you have through a textual description
        of your scene without requiring any reference images. Some things I've
        found it often excels at are: Character portraits (E.g. a picture to go
        with your DnD character) Landscapes (E.g. wallpapers, illustrations to
        compliment a story) Logos (E.g. Esports team, business, profile picture)
        You can be as vague or as descriptive as you want. Being more vague will
        allow the AI to be more creative which can sometimes result in some
        amazing images. You can also be incredibly precise if you have a clear
        image of what you want in mind. All of the images I create are original
        and will be found nowhere else. If you have any questions you're more
        than welcome to send me a message.
      </p>
      <div class="seller mt-14 flex flex-col gap-5">
        <h2 class="text-lg font-medium">About The Seller</h2>

        <div class="box">
          <div class="items">
            <div class="item">
              <span class="title">From:</span>
              <span class="desc">-USA</span>
            </div>
            <div class="item">
              <span class="title">Member Since:</span>
              <span class="desc">-Aug 2022</span>
            </div>
            <div class="item">
              <span class="title">Avg.response time:</span>
              <span class="desc">-4 hours</span>
            </div>
            <div class="item">
              <span class="title">Last delivery:</span>
              <span class="desc">-1 day</span>
            </div>
            <div class="item">
              <span class="title">Languages:</span>
              <span class="desc">-English, Spanish</span>
            </div>
          </div>
          <hr />
          <p>
            My name is Anna, I enjoy creating AI generated art in my spare time.
            I have a lot of experience using the AI program and that means I
            know what to prompt the AI with to get a great and incredibly
            detailed result.
          </p>
        </div>
        <div class="user">
          <div class="info">
            <span class="flex flex-nowrap items-center gap-3"
              ><span>Total Rate:</span>
              <RateStars starNum={5} rateNum={218} /></span
            >
            <button
              class="mt-5 !bg-gray-200 !bg-opacity-50 font-bold transition-all hover:drop-shadow-md"
              >Contact Me</button
            >
          </div>
        </div>
      </div>
      <div class="reviews mt-28">
        <header>
          <h2 class="mb-1 text-lg font-medium">Reviews</h2>
          <hr class="!mt-0 opacity-40" />
        </header>

        {#each reviews as rv}
          <div class="item my-5 flex flex-col gap-5">
            <div class="user flex flex-col !items-start !gap-2 self-start">
              <img
                src={rv.profileImg}
                class="h-20 w-20 rounded-full object-cover"
                alt="profile_picture"
              />
              <span class="font-medium">
                {rv.username}
                <img
                  src={rv.userCountry.img}
                  alt={rv.userCountry.name}
                  class="float-right ml-2 h-[22px] w-[22px] rounded-md object-cover"
                />
              </span>
              <div class="info flex gap-1 self-start">
                <RateStars
                  starNum={rv.rateStarNum}
                  rateNum={rv.rateAmountNum}
                />,
                <div class="country">
                  <span class="font-light opacity-80">
                    {rv.userCountry.name}
                  </span>
                </div>
              </div>
            </div>

            <p>{rv.reviewDesc}</p>
            <div class="helpful flex items-center gap-1">
              <h4 class="font-medium opacity-80">Helpful?</h4>
              <img src={likeImg} class="ml-3 w-4 object-cover" alt="like" />
              <span class="cursor-pointer font-medium">Yes</span>
              <img src={disLikeImg} class="ml-3 w-4" alt="dislike" />
              <span class="cursor-pointer font-medium">No</span>
            </div>
          </div>
          <hr />
        {/each}
      </div>
    </article>
    <div
      class="bg-bgWhite h-full rounded-xl px-4"
      style="width: calc(25% + 32px); "
    >
      <div
        class="mb-0 mt-12 flex flex-col items-center gap-1 rounded-md rounded-b-none border-2 border-b-0 border-solid border-gray-200 bg-white pb-5 pt-10 transition-all duration-300 hover:pb-10"
      >
        <figure
          class="mb-2 h-40 w-4/5 !max-w-[240px] overflow-hidden rounded-xl"
        >
          <img
            class="h-full w-full object-cover"
            src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="profile_picture"
          />
        </figure>
        <span class=" relative text-lg font-semibold text-gray-800"
          >Anna Bell <sup
            class="bg-greenLightDot absolute -left-[58px] top-[50%] -translate-y-[50%] -skew-x-12 bg-opacity-50 px-1 py-[1px] text-base text-gray-900 opacity-90"
            >seller</sup
          ></span
        >
        <RateStars starNum={5} rateNum={218} />
      </div>
      <div
        class="right gigSingleCta group/singleGigCta hover:border-goldStar sticky top-[136px] flex h-fit flex-col gap-5 rounded-md rounded-t-none border-2 border-solid border-gray-200
        bg-white p-5 transition-all hover:drop-shadow-sm"
        style:height={"max-content"}
      >
        <header class="price flex w-full flex-col items-center gap-2">
          <h3
            class="w-full text-center text-xl font-semibold text-gray-700 opacity-75"
          >
            <span class="border-b-2 border-gray-400 border-opacity-75 px-[2px]"
              >1</span
            > AI generated image
          </h3>
          <h2 class="text-xl font-light text-gray-700">
            <span class="text-[15px] font-medium italic text-red-700">$</span> 59.99
          </h2>
        </header>
        <p
          class="italic decoration-gray-400 underline-offset-2 group-hover/singleGigCta:underline"
        >
          I will create a unique high quality AI generated image based on a
          description that you give me
        </p>
        <div
          class="details ml-2 flex flex-col items-start justify-between gap-2 text-sm"
        >
          <div class="item">
            <img class="opacity-75" src={clockImg} alt="clock" />
            <span class="text-sm font-medium text-gray-600"
              >2 Days Delivery</span
            >
          </div>
          <div class="item">
            <img class="opacity-75" src={recycleImg} alt="recycle" />
            <span class="text-sm font-medium text-gray-600">3 Revisions</span>
          </div>
          <div class="features ml-[3px] mt-2">
            {#each ["Prompt Writing", "Artwork Delivery", "Image upscaling", "Additional design"] as item}
              <div class="item">
                <img src={greenCheckImg} alt="green_checked" />
                <span>{item}</span>
              </div>
            {/each}
          </div>
        </div>
        <button
          class="bg-greenLightDot cursor-pointer rounded-sm border-none p-3 py-2 text-lg font-semibold text-white"
          >Contineu</button
        >
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  /* Component styles */
  .user {
    @apply flex items-center gap-5;
  }

  // .pp {
  //   @apply h-8 w-8 rounded-full object-cover;
  // }

  p {
    font-weight: 300;
    color: #555;
    line-height: 25px;
  }

  .user {
    button {
      @apply rounded-md border-[1px] border-gray-400 bg-white p-3;
    }
  }

  .box {
    @apply mt-3 rounded-md border-[1px] border-gray-300 p-5;

    .items {
      @apply flex flex-wrap justify-between;

      .item {
        @apply mb-5 flex w-80 flex-col gap-3;

        .title {
          @apply font-light;
        }
      }
    }

    .desc {
      font-weight: 500;
    }

    hr {
      @apply mb-5 h-0 border-[0.5px] border-gray-200;
    }
  }

  .reviews {
    hr {
      @apply my-14 h-0 border-[0.5px] border-gray-300;
    }
  }

  .right {
    p {
      @apply my-3 text-gray-500;
    }

    .item {
      @apply flex items-center gap-3;

      img {
        @apply w-5;
      }
    }

    .features {
      .item {
        @apply mb-[6px] flex items-center gap-3 font-light text-gray-500;

        img {
          width: 14px;
        }
      }
    }
  }
</style>
