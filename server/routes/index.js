import fs from 'fs'
import path from 'path'
import Router from 'koa-router'

const router = new Router({prefix: '/api'})
let subRouter

// 加载下面的所有路由文件
fs.readdirSync(__dirname)
    .filter(filename => {
        return filename !== path.basename(__filename)
        // console.log(filename)
     }
    )
    .forEach(filename => {
        subRouter = require(`./${filename}`)
        router.use(subRouter.routes(), subRouter.allowedMethods())
    })

export default router
