import express from 'express'
import { addCustomer, getCustomers } from '../controller/Customer.js'

const router = express.Router()

//add user
router.post('/addcustomer', addCustomer)
// get all users
router.get('/getcustomer', getCustomers)

export default router
