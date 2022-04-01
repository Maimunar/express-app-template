import { Router } from 'express'
import addTwoNumbers from 'controllers/addTwoNumbers'

const router = Router()

router.post('/', addTwoNumbers)

export default router
