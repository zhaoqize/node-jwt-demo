import jsonwebtoken from 'jsonwebtoken'
import koaRouter from 'koa-router'
const router = koaRouter()

// 登陆成功后，签发 token
router.post('/login', (ctx, next) => {
  const { username, password } = ctx.request.body;
  const checkUser = username === 'zqz' && password === '123';
  if (checkUser) {
    ctx.body = {
      code: 200,
      msg: '登录成功',
      token: jsonwebtoken.sign(
          { name: 'zqz', id: '123' },  // 加密userToken
          'privateKey',
          { expiresIn: '1h' }
      )
    }
  } else {
    ctx.body = {
      code: 400,
      msg: '用户名密码不匹配'
  }
  }
})

export default router
