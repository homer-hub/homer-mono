import Koa, { Context } from "koa";

const app = new Koa();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use((ctx: Context) => {
  ctx.body = "Hello World";
});
