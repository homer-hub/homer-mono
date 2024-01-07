import mongoose from 'mongoose'
import config from 'config'

export const dbProvider = {
  init: async () => {
    mongoose.connection.on('connected', () => {
      console.log('Connected to MongoDB \n')
    })
    mongoose.connection.on('error', (err) => {
      console.error(`MongoDB connection error: ${err} \n`)
    })
    mongoose.connection.on('disconnected', () => {
      console.info('Connection to MongoDB closed \n')
    })

    await mongoose.connect(config.get('MONGO.CONNECTION_STRING'))
  },
}
