import express from 'express'
import { signup } from '../Controller/Auth.js'

const router = express.Router()
//Create a user
router.post('/signup', signup)

export default router
