<script>
  // Component logic
</script>

<!-- Component markup -->

<div class="font-Montserrat flex justify-center">
  <div class="py-14 lg:w-[1180px] xl:w-[1400px]">
    <header
      class=" mb-16 w-full border-b-[1px] border-b-gray-300 border-opacity-75 text-[22px] font-semibold text-gray-500"
    >
      <h1>Add New Gig</h1>
    </header>
    <div class="sections flex justify-between gap-24">
      <div class="info">
        <label for="gigTitleInput">Title</label>

        <input
          type="text"
          id="gigTitleInput"
          placeholder="e.g. I will do something I'm really good at"
        />

        <label for="gigCategoryInput">Category</label>
        <select
          name="cats"
          id="gigCategoryInput"
          class="font-Montserrat pr-2 text-gray-500"
        >
          <option value="">Select an Option</option>
          <option value="web">Web Development</option>
          <option value="animation">Animation</option>
          <option value="music">Music</option>
        </select>
        <label for="gigImgCover">Cover Image</label>

        <input class="input" type="file" />
        <label for="gigImages">Upload Images</label>
        <input type="file" class="fileInput" multiple id="gigImages" />
        <label for="gigDescInput">Description</label>
        <textarea name="description" id="gigDescInput" cols="30" rows="10" />
        <button>Create</button>
      </div>
      <div class="details">
        <label for="gigDetailTitle">Service Title</label>
        <input
          type="text"
          id="gigDetailTitle"
          placeholder="e.g. One-page web design"
        />
        <label for="gigShortDesc">Short Description</label>
        <textarea
          name="short description"
          id="gigShortDesc"
          cols="30"
          rows="10"
          placeholder="Short description of your service"
        />
        <label for="gigDeliverTime">Deliver Time (e.g. 3days)</label>
        <input id="gigDeliverTime" type="number" />
        <label for="gigAddFatures">Add Features</label>
        <input id="gigAddFatures" type="text" placeholder="e.g. page design" />
        <input
          id="gigAddFatures"
          type="text"
          placeholder="e.g. file uploading"
        />
        <input
          id="gigAddFatures"
          type="text"
          placeholder="e.g. setting up a domain"
        />
        <input id="gigAddFatures" type="text" placeholder="e.g. hosting" />
        <label for="gigPrice">Price</label>
        <input id="gigPrice" type="number" />
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  /* Component styles */
  .sections {
    label {
      @apply w-fit cursor-pointer border-b-[1px] border-b-gray-200 text-lg font-medium text-gray-500 transition-all duration-500 hover:px-1;
    }
    .info,
    .details {
      @apply flex flex-grow-[1] flex-col justify-between gap-3;
      input,
      select,
      textarea {
        padding: 20px;
        @apply rounded-md border-[1px] border-gray-300
        border-opacity-50 outline-none transition-all focus:border-opacity-100 focus:drop-shadow-md;
      }
      input.fileInput {
        @apply file:font-Montserrat cursor-pointer file:mr-2 file:cursor-pointer file:rounded-lg file:border-4 file:border-green-400 file:bg-white file:px-3 file:py-1 file:text-sm file:font-semibold;
      }

      button {
        @apply bg-greenLightDot cursor-pointer rounded-md border-none bg-opacity-75 p-5 text-lg font-bold tracking-wide text-white transition-all hover:bg-opacity-100 lg:text-xl;
      }
    }
  }
</style>
