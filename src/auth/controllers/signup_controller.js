const signup_services = require("../services/signup_services")

module.exports = (req,res) =>{
    try {
        var userProfile = signup_services(req.body)
        res.send(userProfile)
    } catch (error) {
        console.log("ERROR...")
    }
}