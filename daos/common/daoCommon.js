// i want to connect to the database to gain access of the data
// Data Access Object = DAO
// its an object {}, commas, and key value pair - helps get acces of the data

// daoCommon handles basic queries similar to SELECT * or findById
// Import dbconfig because the pool connect to multiple databases 
const connect = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')



// Q1. Find All - access all the data from the database, 
const daoCommon = {
// create methods that will query the database


// Q1. FIND ALL movies and actors
    findAll: (res, table)=> {
// .query(1. arg- sql query, 2. arg- callback function: what do you want me to do?)
        connect.query(      //use dbconfig connection
            `SELECT * FROM ${table};`,
            (error, rows)=> {
                queryAction(res, error, rows, table)
                // if (!error) {
                //     if (rows.length === 1 ) {
                //         res.json(...rows)
                //     } else {
                //         res.json(rows)
                //     }
                // } else {
                //     console.log(`Dao Error: ${error}`)
                //     res.json({
                //         "message": 'error',
                //         'table': `${table}`,
                //         'error': error 
                //     })
                // }
            }
        )  
    },
// Q2. FIND BY ID
    findById: (res, table, id)=> {
        connect.query(
            `SELECT * FROM ${table} WHERE ${table}_id = ${id};`,
            (error, rows)=> {
                queryAction(res, error, rows, table)
                // if (!error) {
                //     res.json(...rows)   //only getting one item and dont have to add (rows.length === 1)
                // } else {
                //     console.log(`Dao Error: ${error}`)
                //     res.json({
                //         "message": 'error',
                //         'table': `${table}`,
                //         'error': error 
                //     })
                // }
            }
        )
    },
// Q3. SORT 
    sort: (res, table, sorter)=> {
        connect.query(
            `SELECT * FROM ${table} ORDER BY ${sorter};`,
            (error, rows)=> {
                queryAction(res, error, rows, table) 
                // if (!error) {
                //     if (rows.length == 1) { //
                //         res.json(...rows)
                //     } else {
                //         res.json(rows)
                //     }
                // } else {
                //     console.log(`Dao Error: ${error}`)
                //     res.json({
                //         "message": 'error',
                //         'table': `${table}`,
                //         'error': error 
                //     })
                // }
            }
        )
    }
}


module.exports = daoCommon 

