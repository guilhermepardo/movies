module.exports = class TheatresService {
    constructor(httpHandler, urlBuilder, responsePattern) {
        this.httpHandler = httpHandler,
        this.urlBuilder = urlBuilder
        this.responsePattern = responsePattern
    }

    async current() {
        try {
            let list = []
            const response = await this.httpHandler.get(this.urlBuilder.buildFeatureUrl('theatres'))
            response.results.map(element => {
                list.push(this.responsePattern.buildResponsePattern(element))
            })
            return list
        } catch (error) {
            throw error
        }
    }

    async upcoming() {
        try {
            let list = []
            const response = await this.httpHandler.get(this.urlBuilder.buildFeatureUrl('theatres_upcoming'))
            response.results.map(element => {
                list.push(this.responsePattern.buildResponsePattern(element))
            })
            return list
        } catch (error) {
            throw error
        }
    }

}