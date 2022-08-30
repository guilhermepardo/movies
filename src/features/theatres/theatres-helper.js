module.exports = class TheatresHelper {
    constructor(genreHelper) {
        this.genreHelper = genreHelper
    }

    genreConversor(genres) {
        return this.genreHelper(genres)
    }

}