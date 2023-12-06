import { html } from "@elysiajs/html";
import { Elysia } from "elysia";
import Home from "./views";
import Tweet from "./views/Tweet";
import { randomUUID } from "crypto";

const tweets: any[] = [];

new Elysia()
  .use(html())
  .get("/", () => <Home />)
  .post("/tweet", ({ body }: any) => {
    const id = randomUUID();
    tweets.push({ id, ...body });

    return <Tweet id={id} username={body.username} tweet={body.tweet} />;
  })
  .put("/like/:id", ({ params }: any) => {
    const tweet = tweets.find((tweet) => tweet.id === params.id);

    if (tweet) {
      tweet.likes = tweet.likes ? tweet.likes + 1 : 1;
    }

    return `(${tweet?.likes || 0})`;
  })
  .delete("/tweet/:id", ({ params }: any) => {
    const index = tweets.findIndex((tweet) => tweet.id === params.id);

    if (index !== -1) {
      tweets.splice(index, 1);
    }

    return (
      <>
        {tweets.map((tweet) => (
          <Tweet
            id={tweet.id}
            username={tweet.username}
            tweet={tweet.tweet}
            likes={tweet.likes}
          />
        ))}
      </>
    );
  })
  .listen(3030);

console.log("Server running at http://localhost:3030");
