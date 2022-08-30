const genres = require('../store/genres')

module.exports = (movieGenres) => {
    let convertedGenres = []
    movieGenres.map(genre => {
        genres.map(index => {
            if (index.id === genre) {
                convertedGenres.push(index.name)
            }
        })
    })
    return convertedGenres
}