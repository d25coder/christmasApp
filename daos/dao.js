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

const stream_platDao = {
    ...daoCommon,
    ...require('./api/stream_platDao') 
}


// all endpoints will meet up her
module.exports = {
    actorDao,
    directorDao,
    programDao,
    productionDao,
    stream_platDao 
}