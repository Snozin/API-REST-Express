import express from 'express'
import APIController from '../../controllers/APIController.js'

const router = express.Router()
const API = new APIController()

router.post('/login', API.login)

router.post('/register', API.register)

export default router
