module.exports = (router) => {
    router.get('/test', (req, res) => {
        res.send({
            test: 'test'
        })
    })
}