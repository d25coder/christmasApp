// Build Server
const express = require('express')
const server = express()
const router = require('./routes/router') // imports our router file
const PORT = process.env.PORT || 5554


//import Helmet and Cors
// Handle Security
const helmet = require('helmet')
const cors = require('cors')

//server.use(helmet()) //must configure before using bootstrap 
server.use(helmet.contentSecurityPolicy({
    useDefaults: true,
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false, 
    directives: {
        "img-src": ["'self'", "https: data"],
        "scriptSrc": ["'self'", "cdn.jsdelivr.net"]
    }
})
)
server.use(cors())
server.use(express.json()) //refers to pkg.json start/dev to run server.js file, everything runs here
server.use(express.urlencoded({ extended: true})) 

// Let server know we're using ejs as the view engine
//
server.set('view engine', 'ejs')

// localhost:5554
server.use('/', router) //points to router file 

server.listen(PORT, ()=> console.log(`Jesus is the reason for the season!`)) 