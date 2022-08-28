module.exports = class TheatresService {
    constructor(apiKey, httpHelper, theatresHelper) {
        this.apiKey = apiKey
        this.httpHelper = httpHelper,
        this.theatresHelper = theatresHelper
    }

    async theatres() {
        try {
            let list = []
            const response = await this.httpHelper.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}`)
            response.results.map(movie => {
                list.push({
                title: movie.title,
                originalTitle: movie.original_title,
                sinopsis: movie.overview,
                genres: this.theatresHelper.genreConversor(movie.genre_ids),
                release: movie.release_date,
                language: movie.original_language,
                adult: movie.adult,
                rating: movie.vote_average,
                popularity: movie.popularity
                })
            })
            return list
        } catch (error) {
            throw error
        }
    }

}