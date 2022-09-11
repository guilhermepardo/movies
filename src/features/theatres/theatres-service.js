module.exports = class TheatresService {
    constructor(httpHandler, helper) {
        this.httpHandler = httpHandler,
        this.helper = helper
    }

    async current() {
        try {
            let list = []
            const response = await this.httpHandler.get(this.helper.getTmdbFeatureUrlComposed('THEATRES'))
            response.results.map(movie => {
                list.push({
                title: movie['title'],
                originalTitle: movie['original_title'],
                sinopsis: movie['overview'],
                posterImage: this.helper.getTmdbImageUrlComposed(movie['poster_path']),
                genres: this.helper.genreConversor(movie['genre_ids']),
                release: movie['release_date'],
                language: movie['original_language'],
                adult: movie['adult'],
                rating: movie['vote_average'],
                popularity: movie['popularity']
                })
            })
            return list
        } catch (error) {
            throw error
        }
    }

    async upcoming() {
        try {
            let list = []
            const response = await this.httpHandler.get(this.helper.getTmdbFeatureUrlComposed('THEATRES_UPCOMING'))
            response.results.map(movie => {
                list.push({
                title: movie['title'],
                originalTitle: movie['original_title'],
                sinopsis: movie['overview'],
                posterImage: this.helper.getTmdbImageUrlComposed(movie['poster_path']),
                genres: this.helper.genreConversor(movie['genre_ids']),
                release: movie['release_date'],
                language: movie['original_language'],
                adult: movie['adult'],
                rating: movie['vote_average'],
                popularity: movie['popularity']
                })
            })
            return list
        } catch (error) {
            throw error
        }
    }

}