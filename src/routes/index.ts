import { Router } from 'express'
import UserController from '../controllers/user'
import SubscriptionController from '../controllers/subscription'
import { authentication } from '../middleware/auth'

const router = Router()

router.get('/', (req, res) => res.send({ message: 'Server test ok' }))

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.put('/subscribe', authentication, SubscriptionController.subscribe)
router.put('/unsubscribe', authentication, SubscriptionController.unsubscribe)

router.get('/*', (req, res, next) =>
  next({ status: 404, message: 'URI does not exist. Please make sure the uri is typed correctly.' })
)

export default router
