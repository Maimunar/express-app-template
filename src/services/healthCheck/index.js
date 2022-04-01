import 'dotenv/config'

export const getCheckInfo = () => {
  const checkInfo = {
    healthStatus: 'online',
    port: process.env.PORT || 8000,
  }

  return checkInfo
}
