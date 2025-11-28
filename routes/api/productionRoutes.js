const router = require('express').Router()
const { productionDao: dao} = require('../../daos/dao')




// Production Find All
// http://localhost:5554/api/productions
router.get('/', (req, res)=> {      //404 Error after clicking link
    dao.findAll(res, dao.table) 

})

module.exports = router 