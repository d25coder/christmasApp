// handles all routing for Actor Table
const express = require('express')
const router = express.Router()
const { actorDao: dao } = require('../../daos/dao')    //pull actorDao & name it dao

// Q1. FIND ALL movies - http://localhost:5554/api/actors 
// when i click on the link for All Actors, i want you to findAll > method in daoCommons
router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

// Q3. SORT throgh movies http://localhost:5554/api/actors/sort/lName
router.get('/sort/:sorter', (req, res)=> {
    dao.sort(res, dao.table, req.params.sorter)
})

// Q4. SEARCH actor by fName c- letter http://localhost:5554/api/actors/search?first_name=c
router.get('/search', (req, res)=> {
    dao.search(req, res, dao.table, req.params.search)
})





// Q2. FIND BY ID http://localhost:5554/api/actors/27
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})
module.exports = router 