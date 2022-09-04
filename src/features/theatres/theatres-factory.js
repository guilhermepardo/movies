const TheatresService = require('./theatres-service')
const TheatresController = require('./theatres-controller')
const HttpHandler = require('../../general/protocols/http-handler')
const genreHelper = require('../../general/feature-helpers/genre-helper')
const TheatresHelper = require('./theatres-helper')

const httpHandler = new HttpHandler()
const theatresHelper = new TheatresHelper(genreHelper)
const theatresService = new TheatresService(process.env.TMDB_V3_KEY, httpHandler, theatresHelper)
const theatresFactory = new TheatresController(theatresService)

module.exports = theatresFactory 