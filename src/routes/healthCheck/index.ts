import { Router } from 'express'
import healthCheck from '@src/controllers/healthCheck'

const router = Router()

router.get('/', healthCheck)

export default router
