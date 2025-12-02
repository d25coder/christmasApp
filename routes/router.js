const express = require('express')
const router = express.Router()
// create a port
const PORT = process.env.PORT || 5554

// create a root route
//takes us to the api page
// http://localhost:5554/api
router.get('/api', (req, res)=> {
    // res.send('program api') // received program api on the browser
    res.json({    //endpoints for each specific data
        'All Actors': `http://localhost:${PORT}/api/actors`,
        'All Directors': `http://localhost:${PORT}/api/directors`,   
        'All Programs': `http://localhost:${PORT}/api/programs`,
        'All Productions': `http://localhost:${PORT}/api/productions`,
        'All Streaming_platform': `http://localhost:${PORT}/api/streaming_platform`
    })
})
router.use('/api/actors', require('./api/actorRoutes'))
router.use('/api/directors', require('./api/directorRoutes')) 
router.use('/api/programs', require('./api/programRoutes'))
router.use('/api/productions', require('./api/productionRoutes')) 
router.use('/api/streaming_platform', require('./api/streaming_platformRoutes')) 




// ERROR HANDLER ROUTE
router.use((req, res, next)=> {
    res.status(404)
    .send('<h1>404 Error. This page does not exist.</h1>')
}) 


module.exports = router //exports the router to server.js