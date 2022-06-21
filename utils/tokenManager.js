import jwt from 'jsonwebtoken'

export const generateToken = (uid) => {
  // 60 secs * 10 = 10 min
  const expiresIn = 60 * 10

  try {
    const token = jwt.sign({ uid }, process.env.JWT_SECRET, { expiresIn })

    return { token, expiresIn }
  } catch (error) {
    console.log(error)
  }
}

export const generateRefreshToken = (uid, res) => {
  // 60 secs * 60 mins * 24 h * 30 d = 1 month in miliseconds
  const expiresIn = 60 * 60 * 24 * 30 * 1000

  try {
    const refreshToken = jwt.sign({ uid }, process.env.JWT_REFRESH, {
      expiresIn,
    })
    res.cookie('token', refreshToken, {
      httpOnly: true,
      expires: new Date(Date.now() + expiresIn),
      //Set HTTPS restriction when not in dev mode
      secure: !(process.env.ENVIRONMENT === 'development'),
    })
  } catch (error) {
    console.error(error)
  }
}
