//Dependencies
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT

//Middleware
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

//Routes
app.get('/', (res, req) => {
    req.send('Hello World')
})

//404 Page

//Cards
const cardController = require('./controllers/card_controller')
app.use('/cards', cardController)

//Listen
app.listen(PORT || 5000, () => {
    console.log('listening on port', PORT);
})