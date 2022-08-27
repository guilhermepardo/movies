const PopularService = require('./popular-service')
const PopularController = require('./popular-controller')
const HttpHelper = require('../../general/http-helper')
const genreHelper = require('../../general/feature-helpers/genre-helper')
const PopularHelper = require('./popular-helper')

const httpHelper = new HttpHelper()
const popularHelper = new PopularHelper(genreHelper)
const popularService = new PopularService(process.env.TMDB_V3_KEY, httpHelper, popularHelper)
const popularFactory = new PopularController(popularService)

module.exports = popularFactory 