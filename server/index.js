const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

const data = new Array(10001)
  .fill()
  .map((_, index) => ({
    index
  }))
  .slice(1)

router.get('/data', (ctx, next) => {
  let { pn = 1, size = 10 } = ctx.query

  if (/\D/.test(pn))
    return (ctx.body = {
      code: 403,
      msg: 'unknown pn'
    })

  ctx.body = {
    code: 200,
    data: data.slice((pn - 1) * size, pn * size)
  }
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(12306, _ => {
  console.log(`server run as: http://127.0.0.1:12306`)
})
