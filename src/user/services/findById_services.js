const db = require('../../../db.json')
module.exports = (data) => {
    let userDetails
    db.map((item) => {
        if (item.id == data.id) {
            console.log(item)
            userDetails = item
        }
    }
)
if (userDetails==null) {
    throw new Error("NO USER EXIST BY THIS ID")
}
    return userDetails
    
}