<script>
  // @ts-nocheck

  import { Link } from "svelte-routing";
  import messageImg from "../../assets/message.png";

  // Component logic

  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };
  const orders = [
    {
      imageSRC:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Stunning concep art",
      price: "59.",
      consumer: "Maria Andres",
      action: {
        messageImg,
      },
    },
    {
      imageSRC:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "AI generated Concept art",
      price: "120.",
      consumer: "amirshj",
      action: {
        messageImg,
      },
    },
    {
      imageSRC:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "High quality digital character",
      price: "79.",
      consumer: "Francisco Chang",
      action: {
        messageImg,
      },
    },
    {
      imageSRC:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Illustration hyper realistic painting",
      price: "119.",
      consumer: "Roland Mendel",
      action: {
        messageImg,
      },
    },
    {
      imageSRC:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Original ai generated digital art",
      consumer: "Helen Bennett",
      price: "59.",
      action: {
        messageImg,
      },
    },
    {
      imageSRC:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Text based ai generated art",
      price: "110.",
      consumer: "Yoshi Tannamuri",
      action: {
        messageImg,
      },
    },
    {
      imageSRC:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Text based ai generated art",
      price: "49.",
      consumer: "Giovanni Rovelli",
      action: {
        messageImg,
      },
    },
  ];
  // change the ba
</script>

<!-- Component markup -->

<article class="orders font-Montserrat flex justify-center text-gray-500">
  <div class="container w-[1400px] py-12">
    <header class="title my-8 mb-14 flex justify-between">
      <h1 class="text-xl font-bold">Orders</h1>
    </header>
    <table class="w-full">
      <tr class=" text-gray-500">
        <th>Image</th>
        <th>Title</th>
        <th>Price</th>
        {#if currentUser.isSeller}
          <th>Buyer</th>
        {:else}
          <th>Seller</th>
        {/if}
        <th>Contact</th>
      </tr>
      {#each orders as order, i (i)}
        <tr class="tableRow mt-1 h-16" class:bg-[#1dbf730f]={i % 2 === 0}>
          <td>
            <img
              class="h-[58px] w-16 object-cover"
              src={order.imageSRC}
              alt=""
            />
          </td>
          <td class="font-medium">{order.title}</td>
          <td class="font-medium">{order.price}<sup class="text-xs">99</sup></td
          >
          <td class="font-medium">{order.consumer}</td>
          <td class="  font-medium">
            <img
              on:mouseenter={(e) =>
                e.target
                  .closest(".tableRow")
                  .classList.add("!bg-green-200", "!bg-opacity-75")}
              on:mouseleave={(e) =>
                e.target
                  .closest(".tableRow")
                  .classList.remove("!bg-green-200", "!bg-opacity-75")}
              src={order.action.messageImg}
              alt="message"
              class="ml-4 w-8 cursor-pointer"
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
