const updates_controller = require('./controllers/updates_controller')

const userRouter = require('express').Router()

userRouter.post('/updates',updates_controller)
module.exports =userRouter