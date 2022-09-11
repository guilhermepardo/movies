module.exports = class PopularHelper {
    constructor(genreHelper, tmdbUrls, apiKey) {
        this.genreHelper = genreHelper,
        this.tmdbUrls = tmdbUrls,
        this.apiKey = apiKey
    }

    genreConversor(genres) {
        return this.genreHelper.returnGenresList(genres)
    }

    getTmdbFeatureUrlComposed() {
        return `${this.tmdbUrls['POPULAR']}?api_key=${this.apiKey}`
    }

    getTmdbImageUrlComposed(image) {
        return `${this.tmdbUrls['IMAGES']}${image}`
    }

}