const genreConversor = require('../../general/feature-helpers/genre-helper')

module.exports = class TrendingService {
    constructor(apiKey, httpHelper, generalHelper) {
        this.apiKey = apiKey
        this.httpHelper = httpHelper,
        this.generalHelper = generalHelper
    }

    async trending() {
        try {
            let list = []
            const response = await this.httpHelper.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${this.apiKey}`)
            response.results.map(movie => {
                list.push({
                title: movie.title,
                originalTitle: movie.original_title,
                sinopsis: movie.overview,
                genres: this.generalHelper.genreConversor(movie.genre_ids),
                release: movie.release_date,
                language: movie.original_language,
                adult: movie.adult
                })
            })
            return list
        } catch (error) {
            throw error
        }
    }

}