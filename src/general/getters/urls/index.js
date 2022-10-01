const urls = require('../../store/tmdb-urls')
const UrlsGetters = require('./urls')

const urlsGetters = new UrlsGetters(urls)

module.exports = urlsGetters