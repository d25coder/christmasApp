const router = require('express').Router()
const { directorDao: dao} = require('../../daos/dao')




// Director FindAll
// http://localhost:5554/api/director
router.get('/', (req, res)=> {
    dao.findAll(req, res, dao.table)
})


module.exports = router 