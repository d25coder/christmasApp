const router = require('express').Router()
const { directorDao: dao} = require('../../daos/dao')




// Director FindAll
// http://localhost:5554/api/directors
router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

// SORT http://localhost:5554/api/directors/sort/director_id
router.get('/sort/:sorter', (req, res)=> {
    dao.sort(res, dao.table, req.params.sorter)
})

// FIndById http://localhost:5554/api/directors/25
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})
module.exports = router 