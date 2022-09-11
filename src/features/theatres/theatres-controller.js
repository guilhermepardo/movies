module.exports = class TheatresController {
    constructor(theatresService) {
        this.theatresService = theatresService
    }

    async current(req, res) {
        try {
            const response = await this.theatresService.current()
            res.send(response)
        } catch (error) {
            console.log('error :>>', error)
            res.status(500).json(error)
        }
    }

    async upcoming(req, res) {
        try {
            const response = await this.theatresService.upcoming()
            res.send(response)
        } catch (error) {
            console.log('error :>>', error)
            res.status(500).json(error)
        }
    }

}