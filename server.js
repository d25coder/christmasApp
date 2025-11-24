// Build Server
const express = require('express')
const server = express()
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
        "img-src": ["'self'", "https: data"], //for images
        "scriptSrc": ["'self'", "cdn.jsdelivr.net"] //for bootstrap
    }
}))
server.use(cors())
server.use(express.json()) //refers to pkg.json start/dev to run server.js file, everything runs here
server.use(express.urlencoded({ extended: true})) 




server.listen(PORT, ()=> console.log(`Jesus is the reason for the season!`)) 