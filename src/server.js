const env = require('dotenv').config()

const app = require('./config/app')

app.listen(process.env.PORT, () => console.log(`Server running at http://localhost:${process.env.PORT}`))