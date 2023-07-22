<script>
  // IMGs
  import accessibilityImg from "../../assets/accessibility.png";
  import coin from "../../assets/coin.png";
  import language from "../../assets/language.png";
  import twitter from "../../assets/twitter.png";
  import facebook from "../../assets/facebook.png";
  import linkedin from "../../assets/linkedin.png";
  import pinterest from "../../assets/pinterest.png";
  import instagram from "../../assets/instagram.png";
  // Component logic
  const footerLinks = [
    {
      id: 0,
      title: "Categories",
      links: [
        "Graphics & Design",
        "Digital Marketing",
        "Writing & Translation",
        "Video & Animation",
        "Music & Audio",
        "Programming & Tech",
        "Data",
        "Business",
        "Lifestyle",
        "Photography",
        "Sitemap",
      ],
    },
    {
      id: 1,
      title: "About",
      links: [
        "Press & News",
        "Partnerships",
        "Privacy Policy",
        "Terms of Service",
        "Intellectual Property Claims",
        "Investor Relations",
        "Contact Sales",
      ],
    },
    {
      id: 2,
      title: "Support",
      links: [
        "Help & Support",
        "Trust & Safety",
        "Selling on Liverr",
        "Buying on Liverr",
      ],
    },
    {
      id: 3,
      title: "Community",
      links: [
        "Customer Success Stories",
        "Community hub",
        "Forum",
        "Events",
        "Blog",
        "Influencers",
        "Affiliates",
        "Podcast",
        "Invite a Friend",
        "Become a Seller",
        "Community Standards",
      ],
    },
    {
      id: 4,
      title: "More From Fiverr",
      links: [
        "Liverr Business",
        "Liverr Pro",
        "Liverr Logo Maker",
        "Liverr Guides",
        "Get Inspired",
        "Liverr Select",
        "ClearVoice",
        "Liverr Workspace",
        "Learn",
        "Working Not Working",
      ],
    },
  ];
</script>

<!-- Component markup -->
<footer
  class="mb-0 flex w-full justify-center bg-bgWhite pb-4 pt-24 font-Montserrat"
>
  <div class="w-[1024px] max-w-[1400px] py-4">
    <div class="mx-6 flex flex-wrap items-start justify-between gap-5">
      {#each footerLinks as item (item.id)}
        <div
          class="mx-auto mb-14 flex flex-col flex-nowrap gap-5
          "
        >
          <h2
            class="w-fit border-b-2 border-solid border-gray-500 border-opacity-60 text-base font-semibold text-gray-700"
          >
            {item.title}
          </h2>
          <ul class="flex flex-col flex-nowrap gap-4">
            {#each item.links as link}
              <li
                class="text-sm opacity-80 transition-all hover:scale-[101%] hover:opacity-100"
              >
                <a href="#top">{link}</a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
    <hr class="bg-[#ebe9e9] text-[#ebe9e9]" />
    <div
      class="mx-1 flex flex-wrap items-center justify-center gap-5 pt-2 lg:justify-between"
    >
      <div class=" flex w-fit items-center gap-5">
        <h2
          class=" cursor-pointer text-2xl font-bold text-gray-700
        opacity-80"
        >
          fiverr.
        </h2>
        <span class="whitespace-nowrap text-sm font-light text-gray-600"
          >&copy; Liverr International Ltd. 2023 (<a
            href="#top"
            class="font-medium text-red-700">AWIRSHJ</a
          >)</span
        >
      </div>
      <div class=" flex max-w-fit items-center gap-4">
        <div class="social flex items-center gap-4">
          <img src={twitter} alt="twitter" />
          <img src={facebook} alt="facebook" />
          <img src={linkedin} alt="linkedin" />
          <img src={pinterest} alt="pinterest" />
          <img src={instagram} alt="instagram" />
        </div>
        <div
          class="flex items-center gap-2 font-semibold text-gray-600 opacity-90"
        >
          <img src={language} class="!h-4 !w-4" alt="" />
          <span>English</span>
        </div>
        <div
          class="flex items-center gap-2 font-semibold text-gray-600 opacity-90"
        >
          <img src={coin} class="!h-4 !w-4" alt="coin" />
          <span>USD</span>
        </div>
        <img
          class=" !h-7 !w-7 rounded-full border-[1.5px] border-solid border-gray-400 px-1 py-[2px]"
          src={accessibilityImg}
          alt=""
        />
      </div>
    </div>
  </div>
</footer>

<style>
  /* Component styles */
  img {
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: all 0.25s ease-in;
  }
  img:hover {
    transform: translateY(-3px);
  }
</style>
