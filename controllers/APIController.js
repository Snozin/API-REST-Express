import { User } from '../models/User.js'

class APIController {
  async login(req, res, next) {
    res.status(200).json({ login: 'ok' })
  }

  register(req, res, next) {
    res.status(200).json({ register: 'ok' })
  }
}

export default APIController
