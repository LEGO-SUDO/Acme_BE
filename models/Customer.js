import mongoose from 'mongoose'

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  Card: {
    type: String,
    required: true,
  },
  method: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
})
export default mongoose.model('Customer', customerSchema)
