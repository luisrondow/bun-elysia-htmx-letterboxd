import HomeLayout from "../HomeLayout";

export default function Home() {
  return (
    <HomeLayout>
      <div class="w-full h-full pt-8 px-16 flex flex-col items-center">
        <h1 class="text-5xl font-bold">Twitter Clone HTMX</h1>
        <p class="text-xl">A simple HTMX demo by Luis Rondow</p>
        <form
          hx-post="/tweet"
          hx-target="#tweet-list"
          hx-swap="afterbegin"
          hx-on:after-on-load="set #txtTweet.value to ''"
          class="flex flex-col gap-3 w-full mt-8 max-w-2xl"
        >
          <input
            type="text"
            name="username"
            placeholder="Username"
            class="border-2 border-gray-400 rounded-md p-2"
          />
          <textarea
            id="txtTweet"
            name="tweet"
            placeholder="Tweet"
            class="border-2 border-gray-400 rounded-md p-2"
          ></textarea>
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Tweet
          </button>
        </form>
        <div
          id="tweet-list"
          class="flex flex-col gap-3 mt-8 w-full max-w-xl"
        ></div>
      </div>
    </HomeLayout>
  );
}
