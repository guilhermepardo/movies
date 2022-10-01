module.exports = class DetailedService {
    constructor(
        httpHandler, urlBuilder, responsePattern
    ) {
        this.httpHandler = httpHandler,
        this.urlBuilder = urlBuilder
        this.responsePattern = responsePattern
    }

    async detailed(feature) {
        try {
            let list = []
            const response = await this.httpHandler.get(this.urlBuilder.buildFeatureUrl(feature))
            for (const element of response['results']) {
                const details = await this.httpHandler.get(this.urlBuilder.buildGetByIdUrl(element.id))
                list.push(this.responsePattern.buildResponsePattern(details))
            }
            return list
        } catch (error) {
            throw error
        }
    }

}