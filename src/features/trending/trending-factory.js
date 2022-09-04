const TrendingService = require('./trending-service')
const TrendingController = require('./trending-controller')
const HttpHandler = require('../../general/protocols/http-handler')
const genreHelper = require('../../general/feature-helpers/genre-helper')
const TrendingHelper = require('./trending-helper')

const httpHandler = new HttpHandler()
const trendingHelper = new TrendingHelper(genreHelper)
const trendingService = new TrendingService(process.env.TMDB_V3_KEY, httpHandler, trendingHelper)
const trendingFactory = new TrendingController(trendingService)

module.exports = trendingFactory 