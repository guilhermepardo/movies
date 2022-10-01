const responseKeys = require('../../store/response-keys')
const ResponseKeysGetters = require('./response-keys')

const responseKeysGetter = new ResponseKeysGetters(responseKeys)

module.exports = responseKeysGetter