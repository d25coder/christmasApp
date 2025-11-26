const daoCommon = require('./common/daoCommon')

const actorDao = {
    ...daoCommon,
    ...require('./api/actorDao')  
}


// all endpoints will meet up her
module.exports = {
    actorDao
}