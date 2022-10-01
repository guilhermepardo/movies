const genres = require('../../../store/genres')
const GenreHelper = require('./genre-helper')

const genreHelper = new GenreHelper(genres)

module.exports = genreHelper