const Router = require('koa-router'),
  router = new Router({prefix: '/api'})

let subRouter = require('./user.js')

router.use(subRouter.routes())
router.use(subRouter.allowedMethods())


module.exports = router