import 'dotenv/config'
import { getCheckInfo } from '../../src/services/healthCheck'
import { REAL_CHECK_INFO } from '../utils/constants'

describe('Health Check', () => {
  it('should return correct Health Check Info', () => {
    const checkInfo = getCheckInfo()
    expect(checkInfo.healthStatus).toBe(REAL_CHECK_INFO.healthStatus)
    expect(checkInfo.port).toBe(REAL_CHECK_INFO.port)
  })
})
