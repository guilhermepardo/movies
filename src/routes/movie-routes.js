const trendingFactory = require('../features/trending/trending-factory')
const popularFactory = require('../features/popular/popular-factory')

module.exports = (router) => {
    router.get('/trending/movies', (req, res) => {trendingFactory.handle(req, res)})
    router.get('/popular/movies', (req, res) => {popularFactory.handle(req, res)})
}