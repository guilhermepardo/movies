module.exports = class TheatresHelper {
    constructor(genreHelper, tmdbUrls, apiKey) {
        this.genreHelper = genreHelper,
        this.tmdbUrls = tmdbUrls,
        this.apiKey = apiKey
    }

    genreConversor(genres) {
        return this.genreHelper.returnGenresList(genres)
    }

    getTmdbFeatureUrlComposed(feature) {
        return `${this.tmdbUrls[feature]}?api_key=${this.apiKey}`
    }

    getTmdbImageUrlComposed(image) {
        return `${this.tmdbUrls['IMAGES']}${image}`
    }

}