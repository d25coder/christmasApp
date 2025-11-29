const router = require('express').Router()
const { stream_platDao: dao} = require('../../daos/dao')




//Stream Platform FindAll
// http://localhost5554:api/stream_plat
router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

module.exports = router 