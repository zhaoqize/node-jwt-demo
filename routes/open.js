// import auth from '../controllers/user.js'
import koaRouter from 'koa-router'
const router = koaRouter()

// 签发 token
router.get('/test', (ctx) => {
  ctx.body = {
    code: 200,
    msg: 'OpenAPI',
  }
})

export default router
