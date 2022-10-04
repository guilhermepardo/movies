const urlsGetters = require('../../../getters/urls')
const featuresGetters = require('../../../getters/features')
const UrlBuilderHelper = require('./url-builder')

const urlBuilderHelper = new UrlBuilderHelper(featuresGetters, urlsGetters)

module.exports = urlBuilderHelper