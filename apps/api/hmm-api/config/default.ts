import { SYSTEM } from '@homer-hub/hmm-types'

export type CONFIG = {
  PORT?: number
  MONGO?: {
    CONNECTION_STRING: string
  }
}

const defaultConfig: CONFIG = {
  PORT: 3001,
  MONGO: {
    CONNECTION_STRING: `mongodb://${SYSTEM.LOCAL_IP}:27017/hmm`,
  },
}

export default defaultConfig
