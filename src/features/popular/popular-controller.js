module.exports = class PopularController {
    constructor(service) {
        this.service = service
    }
    async popular(req, res) {
        try {
            const response = await this.service.popular()
            res.send(response)
        } catch (error) {
            console.log('error :>>', error)
            res.status(500).json(error)
        }
    }

}