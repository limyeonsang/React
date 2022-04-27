const Koa = require("koa");

const app = new Koa();

app.use((ctx, next) => {
  console.log(ctx.url);
  console.log(1);

  if (ctx.query.authorized !== "1") {
    ctx.status = 401;
    return;
  }
  next();
});

app.use((ctx, next) => {
  console.log();
  next();
});

app.use((ctx) => {
  ctx.body = "hello";
});

app.listen(4000, () => {
  console.log("listening to 4000 port");
});
