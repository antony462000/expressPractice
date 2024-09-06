const fs = require('fs')
const { v4: uuidv4 } = require('uuid');
module.exports = (profiles) => {
    // try {
    //     
    //     const allData = fs.readFileSync('db.json','utf8'
    //    var variable = allData.toString('base64')
    //    let len = variable.length
    // //    let dd = JSON.parse(allData)
    //    console.log(typeof(allData))
    //     if (len==0){
    //         console.log(" NULL")
    //         // console.log(allData.toString('base64'))
    //         const jsonStringN = JSON.stringify(profiles)
    //         fs.writeFileSync('db.json',jsonStringN,'utf8')
    //     }else{       
    //         console.log("NOT NULL")
    //         const allDbData = require('../../../db.json')
    //         profiles.map((_)=> allDbData.push(_))
    //         const jsonString = JSON.stringify(allDbData)
    //         fs.writeFileSync('db.json',jsonString,'utf8')
    //     }
    // } catch (error) {
    //     console.log("sdfasfasdf")
    //     console.log(error)
    // }


    try {
      
        const isDataExist = fs.readFileSync('db.json', 'utf8').toString()
        let jsonData = isDataExist ? JSON.parse(isDataExist) : []

        profiles.map((_) => {
            _.id=uuidv4()
            jsonData.push(_)})
        fs.writeFileSync('db.json', JSON.stringify(jsonData), 'utf8')

    } catch (error) {
        throw new Error("ERROR IN SIGNING UP")
        
    }
}