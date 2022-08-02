import { Router } from 'express'
import { Controllers } from '../controllers/index.controller.js'

const router = Router();

router.get('/', Controllers.index)

router.get('/users', Controllers.users)

export const Route = router