import { body, validationResult } from 'express-validator'

export const validations = [
  body('email', 'Incorrect e-mail format').trim().isEmail().normalizeEmail(),
  body('password', 'Incorrect password format').isLength({ min: 3 }),
]

export const checkValidationErrors = (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  next()
}
