const Koa = require('koa');
const Router = require('koa-router');
const next = require('next');

const PORT = 3000
const dev = process.env.NODE_ENV !== 'production';


const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router()

  // server.use(async (ctx, next) => {
  //   // console.log('server running');

  //   await handle(ctx.req, ctx.res);
  //   ctx.respond = false;
  // });

  server.use(async (ctx, next) => {
    // const path = ctx.path;
    // const method = ctx.method;
    // ctx.body = `<span>Hello World from Koa! path: ${path}, method: ${method}</span>`;
    await next();
  });

  // server.use(async (ctx, next) => {
  //   ctx.body = '<span>Hello World from Koa! Next</span>';
  // });

  router.get('/test/:id', async (ctx, next) => {
    // const req = ctx.req;
    // const res = ctx.res;
    const id = ctx.params.id;
    // ctx.body = `<span>test from Koa! id: ${id}</span>`;
    ctx.body = {
      id: id,
      message: 'Hello World from Koa!',
    }
    ctx.set('Content-Type', 'application/json')
  });

  server.use(router.routes());
  server.use(router.allowedMethods());

  server.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
