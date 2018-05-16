const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/data/:pn', (ctx, next) => {
  console.log(ctx.params)
  ctx.body = {
    code: 200
  }
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(12306, _ => {
  console.log(`server run as: http://127.0.0.1:12306`)
})
