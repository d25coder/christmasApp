const router = require('express').Router()
const { streaming_platformsDao: dao} = require('../../daos/dao')




// Streaming_platforms FindAll
// http://localhost:5554/api/streaming_platforms
router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})
// when i click on loclhst;5554/api/strem_pla i want it to findAll
// findAll in daoCommon - `SELECT * FROM {table} coming from line 5 in str_platDao and return the data in json

// http:localhost:5554/ap/streaming_plat

// http:localhost:5554/api/streaming_platforms/5
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})
module.exports = router
