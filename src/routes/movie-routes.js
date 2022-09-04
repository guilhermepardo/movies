const trendingFactory = require('../features/trending/trending-factory')
const popularFactory = require('../features/popular/popular-factory')
const theatresFactory = require('../features/theatres/theatres-factory')
const detailedFactory = require('../features/detailed/detailed-factory')

module.exports = (router) => {
    router.get('/movies/trending', (req, res) => {trendingFactory.trending(req, res)})
    router.get('/movies/popular', (req, res) => {popularFactory.popular(req, res)})
    router.get('/movies/theatres', (req, res) => {theatresFactory.current(req, res)})
    router.get('/movies/theatres/upcoming', (req, res) => {theatresFactory.upcoming(req, res)})
    router.get('/movies/detailed/:feature', (req, res) => {detailedFactory.detailed(req, res)})
}