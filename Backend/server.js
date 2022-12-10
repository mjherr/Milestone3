//Dependencies

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

//Middleware

require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Root
app.get('/', (res, req) => {
    req.send('Hello World')
})

//Controllers

const cardController = require('./controllers/card_controller')

app.use('/cards', cardController)

//Listen

app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on port: ${process.env.PORT}`)
})