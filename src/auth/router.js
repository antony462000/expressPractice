const authRouter = require('express').Router();

const login_controller = require('./controllers/login_controller');
const signupController = require('./controllers/signup_controller')

authRouter.post('/signup',signupController)
authRouter.post('/login',login_controller)

module.exports= authRouter