const con = require('../../config/dbconfig')


// Find Program by Production Id - v7
// http://localhost:5554/api/programs/get_production/12
const programDao = {
    table: 'program',

    findProgramByProductionId: (res, table, id)=> {
        const sql = `SELECT title, program_id FROM ${table} WHERE production_id = ${id};`
        con.query(
            sql,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    },
// SELECT title FROM program WHERE title LIKE "%s"; = all programs ending with s
    findProgramsByLastLetter: (req, res)=> {
        const sql = `SELECT title FROM ${table} WHERE title LIKE '%${s}';`
        con.query(
            sql,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    }
}


module.exports = programDao