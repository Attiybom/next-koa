const Koa = require('koa');
const next = require('next');

const PORT = 3000
const dev = process.env.NODE_ENV !== 'production';


const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();

  server.use(async (ctx, next) => {
    // console.log('server running');

    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  // server.use(async (ctx, next) => {
  //   ctx.body = '<span>Hello World from Koa</span>';
  // });

  server.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
