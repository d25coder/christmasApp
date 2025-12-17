const express = require('express')
const router = express.Router()
// create a port
const PORT = process.env.PORT || 5554
const axios = require('axios') //pulls information from Const URL
router.use(express.static('public')) //lets router know to use public folder

// HOME PAGE with home.ejs
// http://localhost:5554
router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: 'actor-app home', 
        name: "Destinie's Christmas App" 
    })
}) 

// ACTOR-FORM => http://localhost:5554/actor-form
router.get('/actor-form', (req, res)=> {
    res.render('pages/actor-Form', {
        title: 'actor form',
        name: 'Actor-Form'
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


// renders data from actor.ejs
router.get('/actors', (req, res)=> {
  const URL = 'http://localhost:5554/api/actors'
  axios.get(URL).then(resp => {
    res.render('pages/actors', { // connects to actor.ejs file
        title: 'actors',
        name: "Destinie's Christmas Actors",
        endpoint: 'actors',
        data: resp.data 
    })
  })   
}) 
// renders data from directors.ejs
router.get('/directors', (req, res)=> {
  const URL = 'http://localhost:5554/api/directors'
  axios.get(URL).then(resp => {
    res.render('pages/directors', {  //connects to directors.ejs file
        title: 'directors',
        name: "Destinie's Christmas Directors",
        endpoint: 'directors',
        data: resp.data 
    })
  })   
})
router.get('/home', (req, res)=> {
  const URL = 'http://localhost:5554/api/home'
  axios.get(URL).then(resp => {
    // console.log(resp.data) // check point
    res.render('pages/home', { 
        title: 'home',
        name: "Destinie's Christmas Home Page",
        endpoint: 'home',
        data: resp.data 
    })
  })   
})
router.get('/productions', (req, res)=> {
  const URL = 'http://localhost:5554/api/productions'
  axios.get(URL).then(resp => {
    res.render('pages/productions', { 
        title: 'productions',
        name: "Destinie's Christmas Productions",
        endpoint: 'productions',
        data: resp.data 
    })
  })   
})
// Renders data from program.ejs
router.get('/programs', (req, res)=> { //router.get('/programs) has to match the URL link and the href in header.ejs
  const URL = 'http://localhost:5554/api/programs'
  axios.get(URL).then(resp => {
    // console.log(resp.data) // check point
    res.render('pages/program', { //res.render has to match .ejs file name and data
        title: 'programs',
        name: "Destinie's Christmas Programs",
        endpoint: 'programs',
        data: resp.data 
    })
  })   
})
router.get('/streaming_platforms', (req, res)=> {
  const URL = 'http://localhost:5554/api/streaming_platform'
  axios.get(URL).then(resp => {
    res.render('pages/streaming_platforms', { 
        title: 'Streaming Platforms',
        name: "Destinie's Christmas Streaming Platforms",
        endpoint: 'streaming_platforms',
        data: resp.data 
    })
  })   
})


// ERROR.ejs HANDLER ROUTE
router.use((req, res, next)=> {
    res.status(404)
    .render('pages/error', {
        title: 'Error Page',
        name: 'SCROOGE'
    })
}) 


module.exports = router //exports the router to server.js