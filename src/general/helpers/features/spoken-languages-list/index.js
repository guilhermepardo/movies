const responseKeysGetter = require('../../../getters/response-keys')
const SpokenLanguagesListHelper = require('./spoken-languages-list')

const spokenLanguagesListHelper = new SpokenLanguagesListHelper(responseKeysGetter)

module.exports = spokenLanguagesListHelper