const responseKeysGetter = require('../../../getters/response-keys')
const CountriesListHelper = require('./countries-list')

const countriesListHelper = new CountriesListHelper(responseKeysGetter)

module.exports = countriesListHelper