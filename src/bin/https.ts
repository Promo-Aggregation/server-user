import app from '../app'
import https, {ServerOptions} from 'https'
import fs from 'fs'

const domain = process.env.DOMAIN
const PORT = 443

let options: ServerOptions
try {
  options = {
    cert: fs.readFileSync(`/etc/letsencrypt/live/${domain}/fullchain.pem`),
    key: fs.readFileSync(`/etc/letsencrypt/live/${domain}/privkey.pem`),
  }
} catch {
  options = {}  
}

const server = https.createServer(options, app)

server.listen(PORT, () => console.log('HTTPS Server running on port', PORT))
