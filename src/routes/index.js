import { Router } from 'express'
import healthCheckRoute from './healthCheck'
import addNumbers from './addNumbers'

const router = Router()

router.use('/healthCheck', healthCheckRoute)
router.use('/addNumbers', addNumbers)

export default router
