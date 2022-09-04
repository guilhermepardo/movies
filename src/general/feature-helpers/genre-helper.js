const genresList = require('../store/genres')

module.exports = (movieGenres) => {
    let genresNames = []
    movieGenres.map(genreNumber => {
        genresList.map(genreIndex => {
            const index = genreNumber.id ? genreNumber.id : genreNumber
            if (genreIndex.id === index) {
                genresNames.push(genreIndex.name)
            }
        })
    })
    return genresNames
}