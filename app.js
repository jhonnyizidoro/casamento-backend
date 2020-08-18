const middlewares = require('./middlewares')
const compression = require('compression')
const routes = require('./routes')
const express = require('express')
const logger = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

const app = express()

app.enable('trust proxy')

app.use(logger('dev'))
app.use(compression())
app.use(cors())
app.use(helmet())
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: false, limit: '50mb' }))
app.use(middlewares.logRequest)
app.use(routes)

const PORT = process.env.PORT || 80

app.listen(PORT, () => {
	console.log(`Server on on PORT: ${PORT}`)
})