module.exports = class TrendingService {
    constructor(apiKey, httpHelper) {
        this.apiKey = apiKey
        this.httpHelper = httpHelper
    }

    async trending() {
        try {
            const response = this.httpHelper.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${this.apiKey}`)
            return response
        } catch (error) {
            throw error
        }
    }

}