import Koa from 'koa'
import Router from '@Koa/router'


const app = new Koa ();
const router = new Router ()

router.get('/', async ctx => {
ctx.body = { ola:"MUndo"} 

})



app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)