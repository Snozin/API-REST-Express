import { User } from '../models/User.js'

class APIController {
  async register(req, res, next) {
    const { email, password } = req.body

    try {
      const userExists = await User.findOne({ email })

      if (userExists) {
        res.status(400).json({ error: 'Email is already in use' })
        return
      } else {
        const hashedPwd = await User.hashPwd(password)
        const user = new User({ email, password: hashedPwd })

        // pendiente hacer cosas con jwt
        await user.save()
        res.status(201).json({ register: 'New user created' })
      }
    } catch (error) {
      console.log('Error at saving process:', error)
      return res.status(500).json({ error })
      // next(error)
    }
  }

  async login(req, res, next) {
    res.status(200).json({ login: 'ok' })
  }
}

export default APIController
