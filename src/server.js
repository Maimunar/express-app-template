import express from 'express'
import 'dotenv/config'

import router from './routes/router'

/*
  Main server file using express
  PORT is saved in the .env file (in gitignore, check README)
*/
const PORT = process.env.PORT || 8000
const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Send the request to the router
app.use('/', router)

// Let the app listen on the suggested port
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

export default app
