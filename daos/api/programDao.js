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
    }
} 


module.exports = programDao