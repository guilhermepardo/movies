module.exports = class PopularService {
    constructor(httpHandler, urlBuilder, responsePattern) {
        this.httpHandler = httpHandler,
        this.urlBuilder = urlBuilder
        this.responsePattern = responsePattern
    }

    async popular() {
        try {
            let list = []
            const response = await this.httpHandler.get(this.urlBuilder.buildFeatureUrl('popular'))
            response.results.map(element => {
                list.push(this.responsePattern.buildResponsePattern(element))
            })
            return list
        } catch (error) {
            throw error
        }
    }

}