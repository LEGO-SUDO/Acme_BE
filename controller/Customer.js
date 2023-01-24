import Customer from '../models/Customer.js'

export const getCustomers = async (req, res, next) => {
  try {
    const customers = await Customer.find({})
    res.status(201).json({ customers })
  } catch (err) {
    next(err)
  }
}
export const addCustomer = async (req, res, next) => {
  const newCustomer = new Customer(req.body)
  try {
    const savedCustomer = await newCustomer.save()
    res.status(201).json(savedCustomer)
  } catch (err) {
    next(err)
  }
}
