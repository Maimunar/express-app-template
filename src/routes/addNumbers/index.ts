import { Router } from 'express'
import addNumbers from '@src/controllers/addNumbers'

const router = Router()

router.post('/', addNumbers)

export default router
