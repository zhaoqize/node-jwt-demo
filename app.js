import Koa from 'koa';
import koaRouter from 'koa-router'
import koaBodyparser from 'koa-bodyparser'
import logger from 'koa-logger'
import jwt from 'koa-jwt'

import auth from './routes/auth.js'
import api from './routes/api.js'
import open from './routes/open.js'


const app = new Koa()
const router = koaRouter();

app.use(koaBodyparser())
app.use(logger())

// Custom 401 handling if you don't want to expose koa-jwt errors to users
app.use(function(ctx, next){
  return next().catch((err) => {
    if (401 == err.status) {
      ctx.status = 401;
      ctx.body = 'Protected resource, use Authorization header to get access\n';
    } else {
      throw err;
    }
  });
});

app.on('error', function (err, ctx) {
  console.log('server error', err)
})

router.use('/open', open.routes())
router.use('/auth', auth.routes()) // 挂载到koa-router上，同时会让所有的auth的请求路径前面加上'/auth'的请求路径。
router.use('/api', jwt({ secret: 'privateKey' }), api.routes()) // 所有走/api/打头的请求都需要经过jwt验证。


app.use(router.routes())

app.listen(3000);