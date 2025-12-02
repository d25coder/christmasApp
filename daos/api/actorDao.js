// queries specific to actor
const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')


const actorDao = {
    table: 'actor',
// Q4. SEARCH actor by fName & lName starting with "d"
// http://localhost:5554/api/actors/search?last_name=c&first_name=d
//  or 
// Search by lname      http://localhost:5554/api/actors/search?last_name=c
    search: (req, res, table)=> {

        let sql = ''

        let query = req.query ? req.query : {}

        let fName = query.first_name || null
        let lName = query.last_name || null 

        if (fName == null && lName == null) {
            sql = `SELECT * FROM ${table};`
        } else if (lName == null) {
            sql = `SELECT * FROM ${table} WHERE fName LIKE '%${fName}%';`
        } else if (fName == null) {
            sql = `SELECT * FROM ${table} WHERE lName LIKE '%${lName}%';`
        } else {
            sql = `SELECT * FROM ${table} WHERE fName LIKE '%${fName}%' AND lName LIKE '%${lName}%';`
        }
        con.execute(
            sql,
            (error, rows)=> {
                queryAction(res, error, rows, table) 
            }
        )
    }

}




module.exports = actorDao