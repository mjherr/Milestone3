
// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')
// const methodOverride = require('method-override')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )

// MIDDLEWARE
// app.set('views', __dirname + '/views')
// app.set('view engine', 'jsx')
// app.engine('jsx', require('express-react-views').createEngine())
// app.use(express.static('public'))
// app.use(express.urlencoded({extended: true}))
// app.use(methodOverride('_method'))

// ROUTES
app.get('/', (req, res) => {
    res.send('¡Hola! Welcome to a place where you can post about your travels!')
})

//404 Page
app.get('*', (req, res) => {
    res.send('404')
})
  
// User controller
const { default: userRouter } = require('./routes/user_routes')
app.use('/user', userRouter)

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})