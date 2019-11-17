import { Router } from 'express'
import UserController from '../controllers/user'

const router = Router()

router.get('/', (req, res) => res.send({ message: 'Server test ok' }))

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.get('/*', (req, res, next) =>
  next({ status: 404, message: 'URI does not exist. Please make sure the uri is typed correctly.' })
)

export default router
