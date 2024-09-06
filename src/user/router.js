const delete_controller = require('./controllers/delete_controller')
const findById_controller = require('./controllers/findById_controller')
const updates_controller = require('./controllers/updates_controller')

const userRouter = require('express').Router()

userRouter.post('/updates',updates_controller)
userRouter.post('/delete', delete_controller)
userRouter.post('/findById',findById_controller)
module.exports =userRouter