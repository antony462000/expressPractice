const express = require('express')
const authRouter =  require('./src/auth/router');
const userRouter = require('./src/user/router');
const app =express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/user', userRouter)
app.use('/auth',authRouter)

app.listen(PORT,(error) =>{
    if(!error)
        console.log(`Server running at http://localhost:${PORT}/`)
    else
    console.log("Error occured,server can't start",error)
})