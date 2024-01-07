import Koa from 'koa'
import config from 'config'

import { dbProvider } from './providers/db-provider/db-provider'

const app = new Koa()

const port = config.get('PORT') as number

app.listen(port, () => {
  console.log(`\nHMM-API is listening on port ${port} \n`)
  dbProvider.init()
})
