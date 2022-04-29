import { Router } from 'express'
import addNumbers from '../controllers/addNumbers'
import healthCheck from '../controllers/healthCheck'

const router = Router()

router.get('/healthCheck', healthCheck)
router.post('/addNumbers', addNumbers)

export default router
