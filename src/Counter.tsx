import HomeLayout from "./HomeLayout";

type CounterProps = {
  count: number;
};

export default function Counter({ count }: CounterProps) {
  return (
    <HomeLayout>
      <div class="flex flex-col items-center">
        Count is {count}
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          hx-post="/count"
        >
          Increment
        </button>
      </div>
    </HomeLayout>
  );
}
