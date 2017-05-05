import Router from 'koa-router'
import signIn from '../controllers/signIn'

const router = new Router({prefix: '/signIn'})

router.post('/', signIn.signIn)

export default router
