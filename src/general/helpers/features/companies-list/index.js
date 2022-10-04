const responseKeysGetter = require('../../../getters/response-keys')
const urlBuilderHelper = require('../url-builder')
const CompaniesListHelper = require('./companies-list')

const companiesListHelper = new CompaniesListHelper(responseKeysGetter, urlBuilderHelper)

module.exports = companiesListHelper