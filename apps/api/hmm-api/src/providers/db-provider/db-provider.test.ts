import { dbProvider } from './db-provider'
import mongoose from 'mongoose'

jest.mock('mongoose', () => ({
  connection: {
    on: jest.fn().mockImplementationOnce(() => Promise.resolve()),
  },
  connect: jest.fn(),
}))

describe('db-provider', () => {
  describe('init', () => {
    it('should call mongoose.connect', async () => {
      await dbProvider.init()
      expect(mongoose.connect).toHaveBeenCalled()
    })
  })
})
