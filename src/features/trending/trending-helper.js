module.exports = class TrendingHelper {
    constructor(genreHelper, tmdbUrls, apiKey) {
        this.genreHelper = genreHelper,
        this.tmdbUrls = tmdbUrls,
        this.apiKey = apiKey
    }

    genreConversor(genres) {
        return this.genreHelper.returnGenresList(genres)
    }

    getTmdbFeatureUrlComposed() {
        return `${this.tmdbUrls['TRENDING']}?api_key=${this.apiKey}`
    }

    getTmdbImageUrlComposed(image) {
        return `${this.tmdbUrls['IMAGES']}${image}`
    }
}