const TheatresService = require('./theatres-service')
const TheatresController = require('./theatres-controller')
const HttpHelper = require('../../general/http-helper')
const genreHelper = require('../../general/feature-helpers/genre-helper')
const TheatresHelper = require('./theatres-helper')

const httpHelper = new HttpHelper()
const theatresHelper = new TheatresHelper(genreHelper)
const theatresService = new TheatresService(process.env.TMDB_V3_KEY, httpHelper, theatresHelper)
const theatresFactory = new TheatresController(theatresService)

module.exports = theatresFactory 