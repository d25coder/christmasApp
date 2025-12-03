const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')

const streaming_platformDao = {
    table: 'streaming_platform', // table name

    findProgramByStreaming_platform: (res, table, id)=> {   // streamPlat = column name    // streamPlat_id = column name 
        const sql = `SELECT p.*, s.streaming_platform                   
                    FROM program p
                    JOIN program_to_streaming_platform USING (program_id)
                    JOIN streaming_platform s USING (streaming_platform_id)
                    WHERE s.streaming_platform_id = ${id};`
        con.query(
            sql,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    },
// order streamPlat alphabetically
    orderBy: (res, table)=> {
        con.execute(
            `SELECT * FROM ${table} ORDER BY streaming_platform;`
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    }
}


module.exports = streaming_platformDao  