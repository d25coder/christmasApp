// Builds a connection to the databas using mysql2 node package 
const mysql = require('mysql2')

const pool = mysql.createPool({
    connectionLimit: 15,
    host: 'localhost',
    user: 'root', 
    password: 'root',
    database: 'christmasapi'
})

module.exports = pool 