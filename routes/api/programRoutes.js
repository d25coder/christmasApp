const router = require('express').Router()
const { programDao: dao} = require('../../daos/dao')




// Program FindAll
// http://localhost:5554/api/programs
router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

// programDao.js = Find Program By Production Id - PIVOT TABLE
//http://localhost:5554/api/programs/get_production/12
router.get('/get_production/:id', (req, res)=> {
    dao.findProgramByProductionId(res, dao.table, req.params.id)
})

// Sort
// http://localhost:5554/api/programs/sort/runtime 
router.get('/sort/:sorter', (req, res)=> {
    dao.sort(res, dao.table, req.params.sorter)
})

// Count All
// http://localhost:5554/api/programs/count
router.get('/count', (req, res)=> {
    dao.countAll(res, dao.table)
})

// Find By Id
// http://localhost:5554/api/programs/25
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

// CREATE
// http://localhost:5554/api/programs/create 
router.post('/create', (req, res)=> {
    dao.create(req, res, dao.table) 
})

// UPDATE
router.patch('/update/:id', (req, res)=> {
    dao.update(req, res, dao.table)
})

module.exports = router