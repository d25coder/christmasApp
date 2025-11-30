const con = require('../../config/dbconfig')


// Find Program by Production Id
// http://localhost:5554/api/programs/get_program/12
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
    }
}


module.exports = programDao