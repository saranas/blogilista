const supertest = require('supertest')
const { app, server } = require('../index')
const api = supertest(app)

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})



test('there are 17 blogs', async () => {
  const response = await api
    .get('/api/blogs')

  expect(response.body.length).toBe(17)
})

test('the first author is Sanni', async () => {
  const response = await api
    .get('/api/blogs')

  expect(response.body[0].author).toBe('Sanni')
})

//post-pyyntö
test('new blog is added', async () => {
  const response = await api
    .post('/api/blogs')

  expect(201)
})

test('no likes -> 0', async () => {
  const response = await api
    .post('/api/blogs')
console.log(response.body)
  expect(response.body[response.body.length -1].likes).toBe(0)
})

test('no title or url', async () => {
  const response = await api
    .post('/api/blogs')

  expect(400)
})

afterAll(() => {
  server.close()
})