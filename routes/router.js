const express = require('express')
const router = express.Router()
// create a port
const PORT = process.env.PORT || 5554

// HOME PAGE with home.ejs
// http://localhost:5554
router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: 'actor-app home', 
        name: "Destinie's Christmas App" 
    })
})

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
    .render('pages/error', {
        title: 'Error Page',
        name: 'SCROOGE'
    })
}) 


module.exports = router //exports the router to server.js