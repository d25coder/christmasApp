const router = require('express').Router()
const { productionDao: dao} = require('../../daos/dao')




// Production Find All
// http://localhost:5554/api/productions
router.get('/', (req, res)=> {      //404 Error after clicking link
    dao.findAll(res, dao.table) 
})

// Sort through Production
// http://localhost:5554/api/productions/sort/production_id
router.get('/sort/:sorter', (req, res)=> {
    dao.sort(res, dao.table, req.params.sorter)
})

// programDao.js Search Production by name of W
// http://localhost:5554/api/productions/search?production=w
router.get('/search', (req, res)=> {
    dao.search(req, res, dao.table)
})

// Count All
// http://localhost:5554/api/productions/count
router.get('/count', (req, res)=> {
    dao.countAll(res, dao.table)
})

//Order By in productionDao.ja
// http://localhost:5554/api/productions/order-by
router.get('/order-by', (req, res)=>{
    dao.orderby(res, dao.table) 
})
// FIndById 
// http://localhost:5554/api/productions/25
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

// CREATE
router.post('/create', (req, res)=> {
    dao.create(req, res, dao.table) 
})

// UPDATE
router.patch('/update/:id', (req, res)=> {
    dao.update(req, res, dao.table)
})
module.exports = router 