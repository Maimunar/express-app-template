import { getCheckInfo } from '../services/healthCheck'
import { ControllerFunction } from '../types/controllers.types'

const healthCheck: ControllerFunction = (req, res) => {
  console.log('Health Check Done!')
  const checkInfo = getCheckInfo()

  res.json(checkInfo)
}

export default healthCheck
