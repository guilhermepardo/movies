const PopularService = require('./popular-service')
const PopularController = require('./popular-controller')
const HttpHandler = require('../../general/protocols/http-handler')
const genreHelper = require('../../general/feature-helpers/genre-helper')
const PopularHelper = require('./popular-helper')

const httpHandler = new HttpHandler()
const popularHelper = new PopularHelper(genreHelper)
const popularService = new PopularService(process.env.TMDB_V3_KEY, httpHandler, popularHelper)
const popularFactory = new PopularController(popularService)

module.exports = popularFactory 