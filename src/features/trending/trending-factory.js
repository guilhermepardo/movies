const TrendingService = require('./trending-service')
const TrendingController = require('./trending-controller')
const HttpHandler = require('../../general/protocols/http-handler')
const GenreHelper = require('../../general/feature-helpers/genre-helper')
const TrendingHelper = require('./trending-helper')
const genresList = require('../../general/store/genres')
const tmdbUrls = require('../../general/store/tmdb-urls')

const genreHelper = new GenreHelper(genresList)
const httpHandler = new HttpHandler()
const trendingHelper = new TrendingHelper(genreHelper, tmdbUrls, process.env.TMDB_V3_KEY)
const trendingService = new TrendingService(httpHandler, trendingHelper)
const trendingFactory = new TrendingController(trendingService)

module.exports = trendingFactory 