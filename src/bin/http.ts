import http from 'http'
import app from '../app'

const server = http.createServer(app)

const port = process.env.PORT || 3001

server.listen(port, () => console.log('Server listening on port', port))
