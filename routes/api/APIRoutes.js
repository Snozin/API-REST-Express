import { Router } from 'express'
import APIController from '../../controllers/APIController.js'
import {
  checkValidationErrors,
  validations,
} from '../../middlewares/validationRequest.js'

const router = Router()
const API = new APIController()

router.post('/register', validations, checkValidationErrors, API.register)

router.post('/login', validations, checkValidationErrors, API.login)

export default router
