module.exports = class TrendingService {
    constructor(genreHelper) {
        this.genreHelper = genreHelper
    }

    genreConversor(genres) {
        return this.genreHelper(genres)
    }

}