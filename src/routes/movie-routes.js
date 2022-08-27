const trendingFactory = require('../features/trending/trending-factory')
const popularFactory = require('../features/popular/popular-factory')
const theatresFactory = require('../features/theatres/theatres-factory')

module.exports = (router) => {
    router.get('/trending/movies', (req, res) => {trendingFactory.handle(req, res)})
    router.get('/popular/movies', (req, res) => {popularFactory.handle(req, res)})
    router.get('/theatres/movies', (req, res) => {theatresFactory.handle(req, res)})
}