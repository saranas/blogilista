
const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

const formatBlog = (blog) => {
	return {
		author: blog.author,
		title: blog.title,
		url: blog.url,
		likes: blog.likes
	}
}

blogsRouter.get('/', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs.map(formatBlog))
    })
})

blogsRouter.post('/', (request, response) => {
  const blog = new Blog(request.body)
  //const body = request.body
  //console.log(request.body)
  console.log(request)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

module.exports = blogsRouter