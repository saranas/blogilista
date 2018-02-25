const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const blogsRouter = require('./controllers/blogs')

const Blog = require('./models/blog')

const config = require('./utils/config')

mongoose
  .connect(config.mongoUrl)
  .then( () => {
    console.log('connected to database', config.mongoUrl)
  })
  .catch( err => {
    console.log(err)
  })

mongoose.Promise = global.Promise

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))
//app.use(middleware.logger)

app.use('/api/blogs', blogsRouter)

//app.use(middleware.error)

const server = http.createServer(app)

server.listen(config.port, () => {
  console.log('Server running on port ${config.port}')
})

server.on('close', () => {
  mongoose.connection.close()
})
 module.exports = {
  app, 
  server
 }


//jääkö tää edelleen tähän??
const PORT = config.port
/*
const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
*/