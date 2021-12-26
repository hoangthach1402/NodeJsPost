const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes') // new
const dotenv = require('dotenv')

dotenv.config()
mongoose
  .connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const app = express()
    app.use(express.json()) // new
    app.use('/api', routes) // new

    app.listen(8080, () => {
      console.log('Server has started!')
    })
  })
