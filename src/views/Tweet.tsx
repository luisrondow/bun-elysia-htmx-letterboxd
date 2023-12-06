type TweetProps = {
  id: string;
  username: string;
  tweet: string;
  likes?: number;
};

export default function Tweet({ id, username, tweet, likes }: TweetProps) {
  return (
    <div class="flex flex-col w-full p-8 border">
      <div class="w-full flex flex-row justify-between">
        <span class="font-bold mb-4">{username}</span>
        <button
          class="underline text-red-500 hover:text-red-700"
          hx-delete={`/tweet/${id}`}
          hx-trigger="click"
          hx-target="#tweet-list"
        >
          Delete
        </button>
      </div>
      <p>{tweet}</p>
      <div class="mt-4 self-end font-bold  text-blue-500 hover:text-blue-700">
        <button hx-put={`/like/${id}`} hx-target="next span#like-counter">
          Like
        </button>
        <span class="ml-1" id="like-counter">
          {`(${likes || 0})`}
        </span>
      </div>
    </div>
  );
}
