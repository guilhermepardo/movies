module.exports = class GenreHelper {
    constructor(genresList) {
        this.genresList = genresList
    }

    returnGenresList(movieGenres) {
        let genresNames = []
        movieGenres.map(genreNumber => {
            this.genresList.map(genreIndex => {
                const index = genreNumber.id ? genreNumber.id : genreNumber
                if (genreIndex.id === index) {
                    genresNames.push(genreIndex.name)
                }
            })
        })
        return genresNames
    }

}