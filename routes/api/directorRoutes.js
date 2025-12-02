const router = require('express').Router()
const { directorDao: dao} = require('../../daos/dao')




// Director FindAll
// http://localhost:5554/api/directors
router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

// SORT 
// http://localhost:5554/api/directors/sort/director_id
router.get('/sort/:sorter', (req, res)=> {
    dao.sort(res, dao.table, req.params.sorter)
})

// driectorDao.js Find Programs by Director Id 
// http://localhost:5554/api/directors/get_director/:6
router.get('/get_director/:id', (req, res)=> {
    dao.findProgramsByDirector(res, dao.table, req.params.id)
})

// directorDao.js Search Director by director Name "c"
// http://localhost:5554/api/directors/search?director=c
router.get('/search', (req, res)=> {
    dao.search(req, res, dao.table)
})




// FIndById 
// http://localhost:5554/api/directors/25
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})
module.exports = router 