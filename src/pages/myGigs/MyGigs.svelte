<script>
  // @ts-nocheck

  import { Link } from "svelte-routing";
  import deleteImg from "../../assets/delete.png";
  import { gigs } from "../../store";
  // Component logic

  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };
  const myGigs = [
    {
      imageSRC:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Stunning concep art",
      price: "59.",
      sales: "13",
      action: {
        deleteImg,
      },
    },
    {
      imageSRC:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "AI generated Concept art",
      price: "120.",
      sales: "41",
      action: {
        deleteImg,
      },
    },
    {
      imageSRC:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "High quality digital character",
      price: "79.",
      sales: "55",
      action: {
        deleteImg,
      },
    },
    {
      imageSRC:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Illustration hyper realistic painting",
      price: "119.",
      sales: "29",
      action: {
        deleteImg,
      },
    },
    {
      imageSRC:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Original ai generated digital art",
      price: "59.",
      sales: "34",
      action: {
        deleteImg,
      },
    },
    {
      imageSRC:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Text based ai generated art",
      price: "110.",
      sales: "16",
      action: {
        deleteImg,
      },
    },
  ];
  // change the ba
</script>

<!-- Component markup -->

<article class="myGigs font-Montserrat flex justify-center text-gray-500">
  <div class="container w-[1400px] py-12">
    <header class="title my-8 mb-14 flex justify-between">
      <h1 class="text-xl font-bold text-gray-600">
        {currentUser.isSeller ? "Gigs" : "Orders"}
      </h1>
      {#if currentUser.isSeller}
        <Link to="/add">
          <button
            class="bg-greenLightDot cursor-pointer rounded-md border-none px-3 py-2 text-lg font-medium text-white transition-all hover:-translate-y-[3px]"
            >Add New Gig</button
          >
        </Link>
      {/if}
    </header>
    <table class="w-full">
      <tr class=" text-gray-500">
        <th>Image</th>
        <th>Title</th>
        <th>Price</th>
        <th>Sales</th>
        <th>Action</th>
      </tr>
      {#each myGigs as gig, i (i)}
        <tr class="tableRow mt-1 h-16" class:bg-[#1dbf730f]={i % 2 === 0}>
          <td>
            <img class="h-[58px] w-16 object-cover" src={gig.imageSRC} alt="" />
          </td>
          <td class="font-medium">{gig.title}</td>
          <td class="font-medium">{gig.price}<sup class="text-xs">99</sup></td>
          <td class="font-medium">{gig.sales}</td>
          <td class="  font-medium">
            <img
              on:mouseenter={(e) =>
                e.target.closest(".tableRow").classList.add("!bg-red-100")}
              on:mouseleave={(e) =>
                e.target.closest(".tableRow").classList.remove("!bg-red-100")}
              src={gig.action.deleteImg}
              alt="delete Gig"
              class="ml-4 w-[22px] cursor-pointer"
            />
          </td>
        </tr>
      {/each}
    </table>
  </div>
</article>

<style lang="scss">
  /* Component styles */
  table {
    th {
      text-align: left;
    }

    tr {
      transition: all 0.3s ease-in;
    }
  }
</style>
