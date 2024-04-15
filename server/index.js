const Koa = require('koa');
const next = require('next');

const PORT = 3000
const dev = process.env.NODE_ENV !== 'production';


const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();

  // server.use(async (ctx, next) => {
  //   // console.log('server running');

  //   await handle(ctx.req, ctx.res);
  //   ctx.respond = false;
  // });

  server.use(async (ctx, next) => {
    const path = ctx.path;
    const method = ctx.method;
    ctx.body = `<span>Hello World from Koa! path: ${path}, method: ${method}</span>`;
    // await next();
  });

  // server.use(async (ctx, next) => {
  //   ctx.body = '<span>Hello World from Koa! Next</span>';
  // });



  server.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
