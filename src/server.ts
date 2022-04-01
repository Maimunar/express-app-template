import 'module-alias/register'
import 'source-map-support/register'
import 'dotenv/config'

import bodyParser from 'body-parser'
import express from 'express'

import routes from './routes'

/*
  Main server file using express
  PORT is saved in the .env file (in gitignore, check README)
*/
const PORT = process.env.PORT || 8000
const app = express()

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Send the request to the router
app.use('/api', routes)

// Let the app listen on the suggested port
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

export default app
