const router = require('express').Router()
const { streaming_platformDao: dao} = require('../../daos/dao')




// Streaming_platforms FindAll
// when i click on loclhst;5554/api/strem_pla i want it to findAll
// findAll in daoCommon - `SELECT * FROM {table} coming from line 5 in str_platDao and return the data in json
// http://localhost:5554/api/streaming_platform
router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

// Find Program By Streaming Platform
// http://localhost:5554/api/streaming_platform/get_streaming_platform/:9
router.get('/get_streaming_platform/:id', (req, res)=> {
    dao.findProgramByStreaming_platform(res, dao.table, req.params.id) 
})

// ORDER straming platform BY alphabet
/http://localhos
router.get('/orderby/:')

//SORT
// http://localhost:5554/ap/streaming_platform/sort
router.get('/sort/:sorter', (req, res)=> {
    dao.sort(res, dao.table, req.params.sorter)
})

// Count All
/http:localhost:5554/api/directors/
router.get('/count', (req, res)=> {
    dao.countAll(res, dao.table)
})

// Find BY Id
// http:localhost:5554/api/streaming_platform/5
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})
// CREATE
router.post('/create', (req, res)=> {
    dao.create(req, res, dao.table) 
})

// UPDATE
router.patch('/update/:id', (req, res)=> {
    dao.update(req, res, dao.table)
})
module.exports = router
