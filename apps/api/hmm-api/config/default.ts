import { SYSTEM, DATA } from '@homer-hub/hmm-types'

export type CONFIG = {
  PORT?: number
  MONGO?: {
    CONNECTION_STRING: string
  }
}

const defaultConfig: CONFIG = {
  PORT: SYSTEM.DEFAULT_PORT,
  MONGO: {
    CONNECTION_STRING: `mongodb://${SYSTEM.LOCAL_IP}:27017/${DATA.HOMER_DB}`,
  },
}

export default defaultConfig
