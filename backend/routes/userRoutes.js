import express from 'express'
// import userAuth from '../middleware/userAuth.js'
import { loginUser, registerUser, adminLogin } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/admin', adminLogin)


export default userRouter