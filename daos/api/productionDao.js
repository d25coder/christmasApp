const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')


const productionDao = {
    table: 'production',
// search production by name c AND id
// SELECT * FROM director WHERE (director = "%c%") AND (director_id = 15)
}


module.exports = productionDao