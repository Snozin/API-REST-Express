import { User } from '../models/User.js'
import { validationResult } from 'express-validator'

class APIController {
  async login(req, res, next) {
    res.status(200).json({ login: 'ok' })
  }

  async register(req, res, next) {
    // Validación de datos recibidos
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body

    res.status(200).json({ register: 'ok' })
  }
}

export default APIController
