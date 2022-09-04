const DetailedService = require('./detailed-service')
const DetailedController = require('./detailed-controller')
const HttpHandler = require('../../general/protocols/http-handler')
const genreHelper = require('../../general/feature-helpers/genre-helper')
const tmdbUrls = require('../../general/store/tmdb-urls')
const DetailedHelper = require('./detailed-helper')

const httpHandler = new HttpHandler()
const detailedHelper = new DetailedHelper(genreHelper, tmdbUrls, process.env.TMDB_V3_KEY)
const detailedService = new DetailedService(httpHandler, detailedHelper)
const detailedFactory = new DetailedController(detailedService)

module.exports = detailedFactory