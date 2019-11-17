import User, { IUserModel } from '../models/user'

class SubscriptionController {
  static async subscribe(req: any, res: any, next: Function) {
    try {
      const { device_token } = req.device_token
      const user: IUserModel = await User.findOneAndUpdate(
        { device_token },
        { $push: { tags: { $each: res.tags } } },
        { new: true }
      )
      res.status(200).json(user)
    } catch (e) {
      next(e)
    }
  }

  static async unsubscribe(req: any, res: any, next: Function) {
    try {
      const { device_token } = req.device_token
      const user: IUserModel = await User.findOneAndUpdate(
        { device_token },
        { $pull: { tags: { $each: res.tags } } },
        { new: true }
      )
      res.status(200).json(user)
    } catch (e) {
      next(e)
    }
  }
}

export default SubscriptionController
