const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')
 
// Find Program By Director Id - v7
const directorDao = {
    table: 'director',

    findProgramsByDirector: (res, table, id)=> {
        const sql = `SELECT p.*, d.director 
                    FROM program p
                    JOIN program_to_director USING (program_id)
                    JOIN director d USING (director_id)
                    WHERE d.director_id = ${id};`
// lines 11-13 JOIN, JOIN, WHERE are subclause
        con.query(
            sql,
            (error, rows)=> {
            queryAction(res, error, rows, table) 
            }
        )
    }, 
// Search Director by Name using "c"
// select * from director WHERE director LIKE "%c%"

// search director by name c AND id
// SELECT * FROM director WHERE (director = "%c%") AND (director_id = 15)
    search: (req, res, table)=> {

        let sql = ''

        let query = req.query ? req.query : {}

        let director = query.director || null

        if (director == null) {
            sql = `SELECT * FROM ${table};`
        } else if (director == null) {
            sql = `SELECT * FROM ${table} WHERE director LIKE '%${c}%';`
        // } else if (fName == null) {
        //     sql = `SELECT * FROM ${table} WHERE lName LIKE '%${lName}%';`
        // } else {
        //     sql = `SELECT * FROM ${table} WHERE fName LIKE '%${fName}%' AND lName LIKE '%${lName}%';`
        }
        con.execute(
            sql,
            (error, rows)=> {
                queryAction(res, error, rows, table) 
            }
        )
    }
}

module.exports = directorDao 