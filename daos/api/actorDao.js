// queries specific to actor
const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')


const actorDao = {
    table: 'actor',
// Q4. SEARCH actor by lName starts with "d"
    // search: (req, res, table)=> {

    //     let sql = ''

    //     let query = req.query ? req.query : {}

    //     let first_name = query.first_name || null
    //     let last_name = query.last_name || null

    //     if (first_name == null & last_name == null) {
    //         sql = `SELECT * FROM ${table};`
    //     } else if (last_name == null) {
    //         sql = `SELECT * FROM ${table} WHERE first_name LIKE '%${first_name}%';`
    //     } else if (first_name == null) {
    //         sql = `SELECT * FROM ${table} WHERE last_name LIKE '%${last_name}%';`
    //     } else {
    //         sql = `SELECT * FROM ${table} WHERE first_name LIKE '%${first_name}%' AND last_name LIKE '%${last_name}%';`
    //     }
    //     con.execute(
    //         sql,
    //         (error, rows)=> {
    //             queryAction(res, error, rows, table) 
    //         }
    //     )
    // },
    
}




module.exports = actorDao