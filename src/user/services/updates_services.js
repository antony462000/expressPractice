const { error } = require('console')
let db = require('../../../db.json')
const fs = require('fs')
module.exports = (data) => {
    db.map((_) => {
        if (_.id == data.id) {
            _.name = (data.name) ? data.name : _.name
            _.password = (data.password) ? data.password : _.password
            _.mob = (data.mob) ? data.mob : _.mob
            _.email = (data.email) ? data.email : _.email
            console.log(_.name)
        }
        else {
            throw new Error("INVALID ID")
        }

    })
    console.log(db)
    fs.writeFileSync('db.json', JSON.stringify(db), 'utf8')
    return db
}