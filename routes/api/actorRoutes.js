// handles all routing for Actor Table
const express = require('express')
const router = express.Router()
const { actorDao: dao } = require('../../daos/dao')    //pull actorDao & name it dao
const { table } = require('../../daos/api/actorDao')

// Q1. FIND ALL actors - 
// http://localhost:5554/api/actors 
// when i click on the link for All Actors, i want you to findAll > method in daoCommons
router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

// Q3. SORT throgh actors 
// http://localhost:5554/api/actors/sort/lName
router.get('/sort/:sorter', (req, res)=> {
    dao.sort(res, dao.table, req.params.sorter)
}) 

// Q4. actorDao.js SEARCH actor by fName c- letter 
// http://localhost:5554/api/actors/search?first_name=c
router.get('/search', (req, res)=> {
    dao.search(req, res, dao.table)
})

// Q5 COUNT ALL rows
// http://localhost:5554/api/actors/count
router.get('/count', (req, res)=> {
    dao.countAll(res, dao.table) 
})

 
// Q2. FIND BY ID 
// http://localhost:5554/api/actors/27
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

// CREATE
// http://localhost:5554/api/actors/create 
router.post('/create', (req, res)=> {
    dao.create(req, res, dao.table) 
})

// UPDATE
router.patch('/update/:id', (req, res)=> {
    dao.update(req, res, dao.table)
})

module.exports = router 