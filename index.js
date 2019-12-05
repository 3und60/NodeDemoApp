require(dotenv).config()

import express, { static } from 'express'
import routes from './routes/index'
import { join } from 'path'
import { urlencoded } from 'body-parser'

const app = express()

app.use(static(join(__dirname, 'public')))
app.use(urlencoded({extended:false}))

app.use((req, res, next) => {
	req.timestamp = new Date().toString()
	next()
})

app.use('/', routes)
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'hjs')

// Server start...
app.listen(8080)
console.log('Server running on http://localhost:8080')
