const updates_services = require("../services/updates_services")

module.exports = (req, res) => {
    try {
        var update = updates_services(req.body)
        res.send(update)
    } catch (error) {
        res.status(400)
        res.send(error.message)
    }

}