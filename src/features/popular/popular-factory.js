const PopularService = require('./popular-service')
const PopularController = require('./popular-controller')
const HttpHandler = require('../../general/protocols/http-handler')
const GenreHelper = require('../../general/feature-helpers/genre-helper')
const PopularHelper = require('./popular-helper')
const genresList = require('../../general/store/genres')
const tmdbUrls = require('../../general/store/tmdb-urls')

const genreHelper = new GenreHelper(genresList)
const httpHandler = new HttpHandler()
const popularHelper = new PopularHelper(genreHelper, tmdbUrls, process.env.TMDB_V3_KEY)
const popularService = new PopularService(httpHandler, popularHelper)
const popularFactory = new PopularController(popularService)

module.exports = popularFactory 