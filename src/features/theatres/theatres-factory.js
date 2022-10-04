const TheatresService = require('./theatres-service')
const TheatresController = require('./theatres-controller')
const httpHandler = require('../../general/protocols/http')
const urlBuilderHelper = require('../../general/helpers/features/url-builder')
const responsePattern = require('../../general/helpers/features/response-pattern')

const theatresService = new TheatresService(httpHandler, urlBuilderHelper, responsePattern)
const theatresFactory = new TheatresController(theatresService)

module.exports = theatresFactory 