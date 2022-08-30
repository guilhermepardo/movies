module.exports = class TheatresController {
    constructor(theatresService) {
        this.theatresService = theatresService
    }

    async handle(req, res) {
        try {
            const response = await this.theatresService.theatres()
            res.send(response)
        } catch (error) {
            console.log('error :>>', error)
            res.status(500).json(error)
        }
    }

}