const login_services = require("../services/login_services")

module.exports= (req,res) =>{
    try {
        var login = login_services(req.body)
        res.send(login)
    } catch (error) {
        res.status(400)
        res.send(error.message)
    }
}