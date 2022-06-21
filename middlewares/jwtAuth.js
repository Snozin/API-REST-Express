import jwt from 'jsonwebtoken'
import { generateToken } from '../utils/tokenManager.js'

export const jwtAuth = (req, res, next) => {
  try {
    let token = req.get('authorization')

    if (!token) {
      throw new Error('No token provided.')
    }

    token = token.split(' ')[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.uid = decoded.uid
    next()
  } catch (error) {
    console.error(error)
    return res.status(401).json({ error: error.message })
  }
}

export const refreshToken = (req, res, next) => {
  try {
    const reToken = req.cookies.token

    if (!reToken) {
      throw new Error('No token provided.')
    }

    const { uid } = jwt.verify(reToken, process.env.JWT_REFRESH)
    const { token, expiresIn } = generateToken(uid)

    req.data = { uid, token, expiresIn }
    next()
  } catch (error) {
    console.error(error)
    return res.status(401).json({ error: error.message })
  }
}
