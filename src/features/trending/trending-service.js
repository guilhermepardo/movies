module.exports = class TrendingService {
    constructor(httpHandler, urlBuilder, responsePattern) {
        this.httpHandler = httpHandler,
        this.urlBuilder = urlBuilder,
        this.responsePattern = responsePattern
    }

    async trending() {
        try {
            let list = []
            const response = await this.httpHandler.get(this.urlBuilder.buildFeatureUrl('trending'))
            response.results.map(element => {
                list.push(this.responsePattern.buildResponsePattern(element))
            })
            return list
        } catch (error) {
            throw error
        }
    }

}