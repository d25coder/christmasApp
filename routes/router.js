const express = require('express')
const router = express.Router()
// create a port
const PORT = process.env.PORT || 5554

// create a root route
//takes us to the api page
// localhost:5554/api
router.get('/api', (req, res)=> {
    // res.send('program api') // received program api on the browser
    res.json({
        'All Actors': `http://localhost:${PORT}/api/actors`  //endpoint for all actors
    })
})


// ERROR HANDLER ROUTE
router.use((req, res, next)=> {
    res.status(404)
    .send('<h1>404 Error. This page does not exist.</h1>')
}) 


module.exports = router //exports the router to server.js