module.exports = class TrendingController {
    constructor(trendingService) {
        this.trendingService = trendingService
    }

    async handle(req, res) {
        try {
            const response = await this.trendingService.trending()
            res.send(response)
        } catch (error) {
            console.log('error :>>', error)
            res.status(500).json(error)
        }
    }

}