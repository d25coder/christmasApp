const router = require('express').Router()
const { programDao: dao} = require('../../daos/dao')




// Program FindAll
// http://localhost:5554/api/programs
router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

// programDao.js = Find Program By Production Id 
//http://localhost:5554/api/programs/get_production/9
router.get('/get_program/:id', (req, res)=> {
    dao.findProgramByProductionId(res, dao.table, req.params.id)
})

// programDao.js = SEARCH: Find Program By Alphabet ending with S
/http://localhost:5554/api/programs/search/find_program_by_s
router.get('/search', (req, res)=> {
    dao.findProgramsByAlphabet(res, dao.table)
})

// Sort
/http://localhost:5554/api/programs/sort/runtime how to sort by run time?
router.get('/sort/:sorter', (req, res)=> {
    dao.sort(res, dao.table, req.params.sorter)
})

// Count All
// http:localhost:5554/api/directors/count/all
router.get('/count/all', (req, res)=> {
    dao.countAll(res, dao.table)
})

// Find By Id
// http://localhost:5554/api/programs/19
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