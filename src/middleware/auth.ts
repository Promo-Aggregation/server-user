import User, { IUserModel } from '../models/user'

export const authentication = async (req: any, res: any, next: Function) => {
  const { device_token } = req.headers
  if (!device_token) return next({ status: 400, message: 'Please set device token' })
  const user: IUserModel = await User.findOne({ device_token })
  if (user) {
    req.device_token = device_token
    req.subscription = user.subscription
    next()
  } else {
    next({ status: 401, message: 'Device is not registered on the server.' })
  }
}
