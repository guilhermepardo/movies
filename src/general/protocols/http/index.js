const axios = require('axios')
const HttpHandler = require('./http-handler')

const httpHandler = new HttpHandler(axios)

module.exports = httpHandler