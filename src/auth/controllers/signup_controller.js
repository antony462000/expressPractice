const signup_services = require("../services/signup_services")

module.exports = (req,res) =>{
    try {
        var userProfile = signup_services(req.body)
        res.send(userProfile)
    } catch (error) {
        res.status(400)
        res.send(error.message)
    }
}