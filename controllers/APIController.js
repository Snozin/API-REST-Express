import { User } from '../models/User.js'
import { generateToken } from '../utils/tokenManager.js'

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
      console.error('Saving process error:', error)
      return res.status(500).json({ error })
      // next(error)
    }
  }

  async login(req, res, next) {
    const { email, password } = req.body

    try {
      const user = await User.findOne({ email })

      if (!user || !(await user.comparePassword(password))) {
        res.status(400).json({ error: 'User not found or incorrect password' })
      }

      const { token } = generateToken(user._id)

      res.status(200).json({ token })
    } catch (error) {
      console.error('Login process error:', error)
      return res.status(500).json({ error })
    }
  }

  async info(req, res) {
    try {
      const user = await User.findById(req.uid)

      res.json({ id: user._id, email: user.email })
    } catch (error) {
      return res.status(500).json({ error })
    }
  }
}

export default APIController
