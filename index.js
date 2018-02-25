const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const blogsRouter = require('./controllers/blogs')

const Blog = require('./models/blog')

const config = require('./utils/config')


//app.use('/api/blogs', blogsRouter)

app.use(cors())
app.use(bodyParser.json())

app.use('/api/blogs', blogsRouter)


mongoose
  .connect(config.mongoUrl)
  .then( () => {
    console.log('connected to database', config.mongoUrl)
  })
  .catch( err => {
    console.log(err)
  })

/*
app.get('/api/blogs', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)
  //const body = request.body
  console.log(request.body)
  //console.log(request)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})
*/

const PORT = config.port
/*
const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
*/