const daoCommon = require('./common/daoCommon')

const actorDao = {
    ...daoCommon,
    ...require('./api/actorDao')  
}

const directorDao = {
    ...daoCommon,
    ...require('./api/directorDao')
}

const programDao = {
    ...daoCommon,
    ...require('./api/programDao')
} 

const productionDao = {
    ...daoCommon,
    ...require('./api/productionDao')
}

const streaming_platformDao = {
    ...daoCommon,
    ...require('./api/streaming_platformDao') 
}
// str_platDao shows properties inside the object { table-wrote inside str_platDao, findAll,-findById,-sort,- wrote inside daoCommon };
// daoCommon holds generic queries
// str_platfoDao holds queries specific to str_plat table
// want daoCommon and str_platDao to meet up inside stream_platDao
// ...daoCommon drops the {} from each objects, and package them inside this object lines 23 - 26 which allows the tables to come together inside dao.js
// all will meet up in dao.js and pull from here instead multiple files
// this method seperates takes and help find errors

// all endpoints will meet up here in dao.js
module.exports = {
    actorDao,
    directorDao,
    programDao,
    productionDao,
    streaming_platformDao
}
