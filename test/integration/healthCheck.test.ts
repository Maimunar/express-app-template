//@ts-nocheck
import { REAL_CHECK_INFO } from '../utils/constants'
import healthCheck from '../../src/controllers/healthCheck'

describe('Health Check Integration', () => {
  it('Should return the correct health check information', () => {
    let req, res, spy
    req = res = {}
    spy = res.json = jest.fn()
    healthCheck(req, res)

    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith(REAL_CHECK_INFO)
  })
})
