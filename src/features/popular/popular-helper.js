module.exports = class PopularHelper {
    constructor(genreHelper) {
        this.genreHelper = genreHelper
    }

    genreConversor(genres) {
        return this.genreHelper(genres)
    }

}