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

// Sort
// http://localhost:5554/api/programs/sort/runtime
router.get('/sort/:sorter', (req, res)=> {
    dao.sort(res. dao.table, req.params.sorter)
})

// Find By Id
// http://localhost:5554/api/programs/19
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

module.exports = router