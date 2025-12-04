const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')


const productionDao = {
    table: 'production',
// search production by Production name of "W"
    search: (req, res, table)=> {

        let sql = ''

        let query = req.query ? req.query : {}

        let production = query.production || null

        if (production == null) {
            sql = `SELECT * FROM ${table};`
        } else {
            sql = `SELECT * FROM ${table} WHERE production LIKE '%${production}%';`
// %${production}% = any letter
        }
        con.execute(
            sql,
            (error, rows)=> {
                queryAction(res, error, rows, table) 
            }
        )  
    },
// Order Production table alphabetically
    orderby: (res, table)=> {
        con.execute(
            `SELECT * FROM ${table} ORDER BY production;`,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    }
}


module.exports = productionDao

// SELECT * FROM director WHERE (director = "%c%") AND (director_id = 15)
