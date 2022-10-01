const PopularService = require('./popular-service')
const PopularController = require('./popular-controller')
const httpHandler = require('../../general/protocols/http')
const urlBuilderHelper = require('../../general/helpers/features/url-builder')
const responsePattern = require('../../general/helpers/features/response-pattern')

const popularService = new PopularService(httpHandler, urlBuilderHelper, responsePattern)
const popularFactory = new PopularController(popularService)

module.exports = popularFactory 