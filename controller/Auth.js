import User from '../models/User.js'
import bcrypt from 'bcryptjs'

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body
  const encryptedpass = await bcrypt.hash(password, 10)
  try {
    const olduser = await User.findOne({ email })
    if (olduser) {
      return res.status(400).json(false)
    }
    await User.create({
      name,
      email,
      password: encryptedpass,
    })
    res.status(200).json(true)
  } catch (err) {
    next(err)
  }
}
