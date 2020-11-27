const koaRouter = require("koa-router");
const router = new koaRouter({ prefix: "/api" });
const index_render = require("../data/index_render");
const list_render = require("../data/list_render");
const { sleep, createToken } = require("../util");

router.post("/userLogin", async (ctx, next) => {
  console.log("===", ctx.request.body);
  const { username } = ctx.request.body;
  await sleep(300);
  let _token = "";
  if (username) {
    _token = createToken(username);
  }
  ctx.body = { data: _token };
});
router.get("/getIndex", async (ctx, next) => {
  await sleep(300);
  ctx.body = { data: index_render };
});
router.get("/getList", async (ctx, next) => {
  const { pageIndex, pageSize } = ctx.query;
  await sleep(300);
  let _data = [];
  if (pageIndex * pageSize < list_render.length) {
    _data = list_render.slice(
      pageIndex * pageSize,
      (Number(pageIndex) + 1) * pageSize
    );
  }
  ctx.body = { data: _data };
});
router.get("/getDetail", async (ctx, next) => {
  const { id } = ctx.query;
  await sleep(300);
  const obj = list_render.filter((item) => {
    return item.id == id;
  })[0];
  ctx.body = { data: obj };
});
module.exports = router;
