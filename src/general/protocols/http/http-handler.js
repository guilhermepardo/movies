
module.exports = class HttpHelper {
    constructor(service) {
        this.service = service
    }
    async get(url) {
        try {
            const response = await this.service.get(url)
            return response['data']
        } catch (error) {
            throw error
        }
    }

}