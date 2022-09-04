module.exports = class DetailedController {
    constructor(detailedService) {
        this.detailedService = detailedService
    }

    async detailed(req, res) {
        try {
            const response = await this.detailedService.detailed(req.params.feature)
            res.send(response)
        } catch (error) {
            console.log('error :>>', error)
            res.status(500).json(error)
        }
    }

}