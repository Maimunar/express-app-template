import { getCheckInfo } from '@src/services/healthCheck'
import { ControllerFunction } from '@src/types/controllers.types'

const healthCheck: ControllerFunction = (req, res) => {
  console.log('Health Check Done!')
  const checkInfo = getCheckInfo()

  res.json(checkInfo)
}

export default healthCheck
