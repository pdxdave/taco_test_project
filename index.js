// bring in express

const server = require('./server')

server.listen(5000, () => {
    console.log("Server is running on port 5000")
})