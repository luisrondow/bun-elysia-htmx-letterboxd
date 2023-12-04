import HomeLayout from "./HomeLayout";

type CounterProps = {
  count: number;
};

export default function Counter({ count }: CounterProps) {
  return (
    <HomeLayout>
      <>
        <div id="content" class="flex flex-col items-center">
          Count is <span>{count}</span>
        </div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          hx-post="/count"
          hx-target="#content span"
        >
          Increment
        </button>
      </>
    </HomeLayout>
  );
}
