import { Router } from 'express'
import healthCheckRoute from './healthCheck'
import addTwoNumbers from './addTwoNumbers'

const router = Router()

router.use('/healthCheck', healthCheckRoute)
router.use('/addTwoNumbers', addTwoNumbers)

export default router
