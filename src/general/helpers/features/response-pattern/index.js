const responseKeysGetter = require('../../../getters/response-keys')
const urlBuilderHelper = require('../url-builder')
const genresHelper = require('../genre-helper')
const companiesListHelper = require('../companies-list')
const countriesListHelper = require('../countries-list')
const spokenLanguagesListHelper = require('../spoken-languages-list')
const ResponsePatterHelper = require('./response-pattern')

const responsePatternHelper = new ResponsePatterHelper(
    responseKeysGetter,
    urlBuilderHelper,
    genresHelper,
    companiesListHelper,
    countriesListHelper,
    spokenLanguagesListHelper)

module.exports = responsePatternHelper