const cors = require('./middlewares/cors.js')
const contentType = require('./middlewares/content-type.js')

module.exports = (app) => {
    app.use(cors)
    app.use(contentType)
}