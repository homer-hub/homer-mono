import Koa, { Context } from 'koa'
import config from 'config'

const app = new Koa()

const port = config.get('PORT') as number

app.listen(port, () => {
  console.log(`HMM-API is listening on port ${port}`)
})

app.use((ctx: Context) => {
  ctx.body = 'Hello World'
})
