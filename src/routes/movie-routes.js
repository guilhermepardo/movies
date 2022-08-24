const trendingFactory = require('../features/trending/trending-factory')

module.exports = (router) => {
    router.get('/trending/movies', (req, res) => {trendingFactory.handle(req, res)})
}