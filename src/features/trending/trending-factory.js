const TrendingService = require('./trending-service')
const TrendingController = require('./trending-controller')
const httpHandler = require('../../general/protocols/http')
const responsePattern = require('../../general/helpers/features/response-pattern')
const urlHelper = require('../../general/helpers/features/url-builder')

const trendingService = new TrendingService(httpHandler, urlHelper, responsePattern)
const trendingFactory = new TrendingController(trendingService)

module.exports = trendingFactory 