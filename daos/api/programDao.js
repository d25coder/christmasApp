const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction') 

// Find Program by Production Id using Pivot Table- v7
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
    findProgramsByAlphabet: (res, table)=> {
        const sql = `SELECT title FROM ${table} WHERE title LIKE '%${title}';`
        con.query(
            sql,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    }
}


module.exports = programDao