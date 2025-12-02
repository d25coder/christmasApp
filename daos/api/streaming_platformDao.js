const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')

const streamPlatDao = {
    table: 'streaming_platform', // table name

    findProgramByStreaming_platform: (res, table, id)=> {   // streamPlat = column name    // streamPlat_id = column name 
        const sql = `SELECT p.*, s.streamPlat                   
                    FROM program p
                    JOIN program_to_streamPlat USING (program_id)
                    JOIN streamPlat s USING (streamPlat_id)
                    WHERE s.streamPlat_id = ${id};`
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
            `SELECT * FROM ${table} ORDER BY streamPlat;`,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    }
}


module.exports = streamPlatDao  