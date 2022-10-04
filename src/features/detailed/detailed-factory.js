const DetailedService = require('./detailed-service')
const DetailedController = require('./detailed-controller')
const httpHandler = require('../../general/protocols/http')
const urlBuilderHelper = require('../../general/helpers/features/url-builder')
const responsePattern = require('../../general/helpers/features/response-pattern')

const detailedService = new DetailedService(httpHandler, urlBuilderHelper, responsePattern)
const detailedFactory = new DetailedController(detailedService)

module.exports = detailedFactory