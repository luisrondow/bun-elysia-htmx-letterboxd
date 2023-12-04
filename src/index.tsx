import { html } from "@elysiajs/html";
import Elysia from "elysia";
import Counter from "./Counter";

let count = 0;

new Elysia()
  .use(html())
  .get("/", () => <Counter count={count} />)
  .post("/count", () => {
    count++;
    return <Counter count={count} />;
  })
  .listen(3030);

console.log("Server running at http://localhost:3030");
