import { getCheckInfo } from 'services/healthCheck'

const healthCheck = (req, res) => {
  console.log('Health Check Done!')
  const checkInfo = getCheckInfo()

  res.json(checkInfo)
}

export default healthCheck
