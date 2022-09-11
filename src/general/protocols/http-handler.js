const axios = require('axios')

module.exports = class HttpHelper {

    async get(url) {
        try {
            const response = await axios.get(url)
            return response.data
        } catch (error) {
            throw error
        }
    }

}