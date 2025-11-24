// Builds a connection to the databas using mysql2 node package 
const mysql = require('mysql2')


// next we create a pool of connections to be used in the app
const pool = mysql.createPool({
    connectionLimit: 15,
    host: 'localhost',
    user: 'root', 
    password: 'root',
    database: 'christmasapi'
})

module.exports = pool 