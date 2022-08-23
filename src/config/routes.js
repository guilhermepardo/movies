const { Router } = require('express')
const router = Router()
const { readdirSync } = require('fs')

module.exports = (app) => {
    app.use('/api', router)
    readdirSync(`${__dirname}/../routes`).map(async file => {
        (await require(`../routes/${file}`)(router))
    })
}