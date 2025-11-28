const router = require('express').Router()
const { programDao: dao} = require('../../daos/dao')




// Program FindAll
// http://localhost:5554/api/programs
router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})


module.exports = router