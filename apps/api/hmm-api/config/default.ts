export type CONFIG = {
  PORT?: number
  MONGO?: {
    CONNECTION_STRING: string
  }
}

const defaultConfig: CONFIG = {
  PORT: 3001,
  MONGO: {
    CONNECTION_STRING: 'mongodb://127.0.0.1:27017/hmm',
  },
}

export default defaultConfig
