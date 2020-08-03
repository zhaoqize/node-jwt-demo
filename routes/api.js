// import auth from '../controllers/user.js'
import koaRouter from 'koa-router'
const router = koaRouter()

// 需要 token 验证的接口
router.get('/getSomething', (ctx) => {
  ctx.body = {
    code: 200,
    msg: [
      {
        id: 1,
        name: 'zqz'
      },
      {
        id: 2,
        name: 'zqz1'
      }
    ]
  }
})

export default router
