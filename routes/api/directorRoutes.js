const router = require('express').Router()
const { directorDao: dao} = require('../../daos/dao')




// Director FindAll
// http://localhost:5554/api/directors
router.get('/', (req, res)=> {
    dao.findAll(res, dao.table) 
})


module.exports = router 