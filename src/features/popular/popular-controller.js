module.exports = class PopularController {
    constructor(popularService) {
        this.popularService = popularService
    }

    async handle(req, res) {
        try {
            const response = await this.popularService.popular()
            res.send(response)
        } catch (error) {
            console.log('error :>>', error)
            res.status(500).json(error)
        }
    }

}