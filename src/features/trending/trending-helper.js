module.exports = class TrendingHelper {
    constructor(genreHelper) {
        this.genreHelper = genreHelper
    }

    genreConversor(genres) {
        return this.genreHelper(genres)
    }

}