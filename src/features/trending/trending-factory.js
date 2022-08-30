const TrendingService = require('./trending-service')
const TrendingController = require('./trending-controller')
const HttpHelper = require('../../general/http-helper')
const genreHelper = require('../../general/feature-helpers/genre-helper')
const TrendingHelper = require('./trending-helper')

const httpHelper = new HttpHelper()
const trendingHelper = new TrendingHelper(genreHelper)
const trendingService = new TrendingService(process.env.TMDB_V3_KEY, httpHelper, trendingHelper)
const trendingFactory = new TrendingController(trendingService)

module.exports = trendingFactory 