const { stringify } = require('uuid')
let db =require('../../../db.json')
const fs = require('fs')

module.exports = (data)=>{
    try {
        
        db.map((_)=>{
            if (data.id==_.id) {
                const index = db.indexOf(_)
                if (index > -1){
                    db.splice(index,1)
                    console.log(db)
                }
            } else {
                
            }
        })
     fs.writeFileSync('db.json',JSON.stringify(db),'utf8')   
        return data
    } catch (error) {
        throw new Error("No User Found To Delete")
    }
}