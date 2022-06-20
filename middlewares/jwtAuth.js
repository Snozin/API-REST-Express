import jwt from 'jsonwebtoken'

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
