const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
  ctx.body = "Home";
});

router.get("/about/:name?", (ctx) => {
  const { name } = ctx.params;

  ctx.body = name ? `${name}님 안녕` : "안녕";
});

router.get("/posts", (ctx) => {
  const { id } = ctx.query;
  ctx.body = id ? `Post #${id}` : "No Post";
});

app.use(router.routes()).use(router.allowedMethods);

app.listen(4000, () => {
  console.log("listening to 4000 port");
});
