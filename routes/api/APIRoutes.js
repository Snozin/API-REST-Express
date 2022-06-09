import express from 'express'
import { body } from 'express-validator'
import APIController from '../../controllers/APIController.js'

const router = express.Router()
const API = new APIController()
// Validación de datos recibidos
const validations = [
  body('email', 'Incorrect e-mail format').trim().isEmail().normalizeEmail(),
  body('password', 'Incorrect password format').isLength({ min: 3 }),
]

router.post('/login', API.login)

router.post('/register', validations, API.register)

export default router
