const http = require('http')

const notes = []

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end()
})

const PORT = 3001
app.listen(PORT)
console.log(`Server is running on port: ${PORT}`)
