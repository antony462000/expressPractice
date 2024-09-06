const delete_services = require("../services/delete_services")

module.exports = (req,res)=>{
   try {
    var services = delete_services(req.body)
    res.send(services)
   } catch (error) {
    res.status(400)
    res.send(error.message)
   }
}