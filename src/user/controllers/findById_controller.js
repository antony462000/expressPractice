const findById_services = require("../services/findById_services")

module.exports = (req, res) => {
    try {
        var findUser = findById_services(req.body)
        res.send(findUser)
    } catch (error) {
        res.status(400)
        res.send(error.message)
    }

}