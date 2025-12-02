// i want to connect to the database to gain access of the data
// Data Access Object = DAO
// its an object {}, commas, and key value pair - helps get acces of the data

// daoCommon handles basic queries similar to SELECT * or findById
// Import dbconfig because the pool connect to multiple databases 
const connect = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')



 
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
    },
// Count all rows
    countAll: (res, table)=> {
        connect.execute(
            `SELECT COUNT(*) AS count FROM ${table};`,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    },
// Create
    create: (req, res, table)=> {
        if (Object.keys(req.body).length == 0) { // takes body, takes properties in req.body object, then put with fields
            res.json({
                "error": true,
                "message": "No fields to create"
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body) //take the vales in req,body obj, then store in values
// takes object, split it, parse through it, then put it back together in query line 104
            connnect.execute(
// INSERT INTO actor table SET {fields.join(takes the first item fName)} ? = Garbriela, then it will do the same for lName
                `INSERT INTO ${table} SET ${fields.join(' = ?, ')} = ?;`, //JOIN method works on arrays or string, JOIN arguments inside the paranthesis of an item in an array or character in a string
                values, 
// what array am i using to do this, wherever theres a ?, it will use items and values to answer the question
                (error, dbres)=> {
                    if (!error){
                        res.json({
                            Last_id: dbres.insertId
                        })
                    } else {
                        console.log(`${table}DAO error: `, error)
                    }
                }
            )
        }
    },
// UPDATE this particular information
    update: (req, res, table)=> {
        // first check if id= a #
        if (isNaN(req.param.id)) { //if its true that id is Not a Number, send msg "Id must be a number"
            res.json({
                "error": true,
                "message": "Id must be a number"
            })
        } else if (Object.keys(req.body).length ==0) { //if it is a Number, return the key properties of array
            res.json({
                "erroe": true,
                "message": "No fields to update"
            })
        } else { //taking data apart by prim keys(id) and values, then fit inside sql query
            const fields = Object.keys(req.body) //if its completely false
            const values = Object.values(req.body) 

            connect.execute(
                `UPDATE ${table} SET ${fields.join(' = ?, ')} = ? WHERE ${table}_id = ?;`, // first arg
// need information that represents ?, next send array, then pass out values, 
                [...values, req.params.id], 
// spreading out values from line 134, pair keys back with value inside line 137 in ${fields.join( )} = ?
// connect.execute goes through line 139 [values, starting wwith first item - last item, req.params.id] and place them in where when it sees a ?question mark
                (error, dbres)=> {
                    if (!error) { // if success, 
                        // res.send(`Changed ${dbres.changedRows} row(s)`)
                        res.json({
                            "status": 'update',
                            "changeRows": dbres.changedRows
                        })
                    } else {
                        res.json({
                            "error": true,
                            "message": error 
                        })
                    }
                }
            )
        }
    }   
}


module.exports = daoCommon 

