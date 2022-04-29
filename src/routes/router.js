import { Router } from 'express'
import healthCheck from 'controllers/healthCheck'
import addNumbers from 'controllers/addNumbers'

const router = Router()

router.get('/healthCheck', healthCheck)
router.post('/addNumbers', addNumbers)

export default router
