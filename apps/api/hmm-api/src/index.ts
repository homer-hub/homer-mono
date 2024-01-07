import Koa from 'koa'
import config from 'config'
import mongoose from 'mongoose'
import Graceful from '@ladjs/graceful'

import { dbProvider } from './providers/db-provider/db-provider'

const app = new Koa()

const port = config.get('PORT') as number

const hmmApiServer = app.listen(port, () => {
  console.log(`\nHMM-API is listening on port ${port} \n`)
  dbProvider.init()
})

const graceful = new Graceful({
  servers: [hmmApiServer],
  mongooses: [mongoose],
  logger: console,
})
graceful.listen()
