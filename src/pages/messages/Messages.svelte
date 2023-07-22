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
  const message = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto sapiente hic repellat delectus fuga ipsa tempore soluta, eaque labore quod odit omnis nostrum consequuntur suscipit, impedit reiciendis adipisci. Ipsum, veritatis.`;
  // last message, time ago, name
  const messages = [
    {
      imageSRC:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Charley Sharp",
      lastMessage:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto sapiente hic repellat delectus fuga ipsa tempore soluta, eaque labore quod odit omnis nostrum consequuntur suscipit, impedit reiciendis adipisci. Ipsum, veritatis.",
      timeAgo: "1 hour ago",
      action: {
        markAsRead: "Mark as Read",
      },
    },
    {
      imageSRC:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "John Doe",
      lastMessage:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto sapiente hic repellat delectus fuga ipsa tempore soluta, eaque labore quod odit omnis nostrum consequuntur suscipit, impedit reiciendis adipisci. Ipsum, veritatis.",
      timeAgo: "2 hours ago",
      action: {
        markAsRead: "Mark as Read",
      },
    },
    {
      imageSRC:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Elinor Good",
      lastMessage:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto sapiente hic repellat delectus fuga ipsa tempore soluta, eaque labore quod odit omnis nostrum consequuntur suscipit, impedit reiciendis adipisci. Ipsum, veritatis.",
      timeAgo: "1 day ago",
      action: {
        markAsRead: "Mark as Read",
      },
    },
    {
      imageSRC:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Garner David",
      lastMessage:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto sapiente hic repellat delectus fuga ipsa tempore soluta, eaque labore quod odit omnis nostrum consequuntur suscipit, impedit reiciendis adipisci. Ipsum, veritatis.",
      timeAgo: "2 days ago",
      action: {
        markAsRead: "Mark as Read",
      },
    },
    {
      imageSRC:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Troy Oliver",
      lastMessage:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto sapiente hic repellat delectus fuga ipsa tempore soluta, eaque labore quod odit omnis nostrum consequuntur suscipit, impedit reiciendis adipisci. Ipsum, veritatis.",
      timeAgo: "1 week ago",
      action: {
        markAsRead: "Mark as Read",
      },
    },
  ];
  // change the ba
</script>

<!-- Component markup -->

<article class="messages font-Montserrat flex justify-center text-gray-500">
  <div class="container w-[1400px] py-12">
    <header class="title my-8 mb-14 flex justify-between">
      <h1 class="text-xl font-bold">Messages</h1>
    </header>
    <table class="w-full">
      <tr class=" text-gray-500">
        {#if currentUser.isSeller}
          <th>Buyer</th>
        {:else}
          <th>Seller</th>
        {/if}
        <th>Last Messages</th>
        <th>Date</th>
        <th>Action</th>
      </tr>
      {#each messages as m, i (i)}
        <tr class="tableRow" class:active={[1, 0].includes(i)}>
          <!-- name -->

          <td class="ml-0 text-left">
            <Link to="/message/123">
              {m.name}
            </Link>
          </td>
          <!-- last message -->
          <td class=" font-medium !text-gray-400 !text-opacity-75">
            <Link to="/message/123" class="link ">
              {m.lastMessage.substring(0, 75)}...
            </Link></td
          >
          <!-- time -->
          <td class="font-medium">{m.timeAgo}</td>
          <!-- action -->
          <td class="  font-medium">
            <button
              on:mouseenter={(e) =>
                e.target
                  .closest(".tableRow")
                  .classList.add("!bg-green-100", "!bg-opacity-75")}
              on:mouseleave={(e) =>
                e.target
                  .closest(".tableRow")
                  .classList.remove("!bg-green-100", "!bg-opacity-75")}
              class=" cursor-pointer rounded-md">Mark as Read</button
            >
          </td>
        </tr>
      {/each}
    </table>
  </div>
</article>

<style lang="scss">
  /* Component styles */
  table {
    width: 100%;
    th {
      text-align: left;
    }

    tr {
      height: 100px;
      transition: all 0.3s ease-in;

      td {
        padding: 10px;
        &:first-child {
          font-weight: 600;
        }
        button {
          background-color: #1dbf73;
          color: white;
          padding: 10px;
          border: none;
          cursor: pointer;
        }
      }
      &.active {
        background-color: #1dbf730f;
      }
    }
  }
</style>
