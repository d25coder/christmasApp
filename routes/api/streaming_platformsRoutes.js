const router = require('express').Router()
const { streaming_platformsDao: dao} = require('../../daos/dao')




//Stream Platform FindAll
// http://localhost5554:api/streaming_platforms
router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

module.exports = router 