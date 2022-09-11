const TheatresService = require('./theatres-service')
const TheatresController = require('./theatres-controller')
const HttpHandler = require('../../general/protocols/http-handler')
const GenreHelper = require('../../general/feature-helpers/genre-helper')
const TheatresHelper = require('./theatres-helper')
const genresList = require('../../general/store/genres')
const tmdbUrls = require('../../general/store/tmdb-urls')

const genreHelper = new GenreHelper(genresList)
const httpHandler = new HttpHandler()
const theatresHelper = new TheatresHelper(genreHelper, tmdbUrls, process.env.TMDB_V3_KEY)
const theatresService = new TheatresService(httpHandler, theatresHelper)
const theatresFactory = new TheatresController(theatresService)

module.exports = theatresFactory 