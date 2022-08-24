const TrendingService = require('./trending-service')
const TrendingController = require('./trending-controller')
const HttpHelper = require('../../general/http-helper')

const httpHelper = new HttpHelper()
const trendingService = new TrendingService(process.env.TMDB_V3_KEY, httpHelper)
const trendingFactory = new TrendingController(trendingService)

module.exports = trendingFactory 