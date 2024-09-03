const authRouter = require('express').Router();
const signupController = require('./controllers/signup_controller')

authRouter.post('/signup',signupController)

module.exports= authRouter