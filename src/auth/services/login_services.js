const { error } = require('console')

module.exports = (check_profile) => {

    let users = require('../../../db.json')
    const C_pswd = check_profile.password
    const C_mail = check_profile.email
    let reqUser
    users.map((_) => {
        if (_.email == C_mail && _.password == C_pswd) {
            reqUser = _
        }
    })
    if (reqUser == null) {
        throw new Error("INVALID USERNAME OR PASSWORD")
    }
    return reqUser
}

