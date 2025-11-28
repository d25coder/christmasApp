const con = require('../../config/dbconfig')
const { programDao } = require('../dao')

// const directorDao = {
//     table: 'program',

//     findProgInfo: (res, table)=> {

//         const sql = `SELECT p.production_id, p.title, p.yr_released, p.runtime, p.format, p.program_rating,
//         CASE WHEN 
//             p.alias IS NULL THEN ''
//             ELSE p.f`
//     }

// }


module.exports = programDao 