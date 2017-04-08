const router = require('koa-router')()

router.get('./users', async function(ctx, next) {
  ctx.body = "My name is Lucas"
  await next()
})

module.exports = router