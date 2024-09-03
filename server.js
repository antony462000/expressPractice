const express = require('express')

const app =express();
const PORT = 3000;

app.listen(PORT,(error) =>{
    if(!error){
        console.log(`Server running at http://localhost:${PORT}/`)
        return "Hello World"}
    else
    console.log("Error occured,server can't start",error)
})

app.get('/',(req,res) => {
    res.send("Hello World")
})