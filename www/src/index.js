const express = require('express')
const helmet = require('helmet')
const session = require('express-session')

const app = express()
const host = process.env.HOST || `0.0.0.0`
const port = process.env.PORT || 3000

app.disable('x-powered-by')
app.use(helmet())

const expiryDate = new Date(Date.now() + 60 * 60 * 1000) // 1 hour

app.set('trust proxy', 1) // trust first proxy
app.use(session({
    name: 'session',
    keys: ['key1', 'key2'],
    cookie: {
      secure: true,
      httpOnly: true,
      domain: 'localhost',
      path: '/cache/sess.cookie',
      expires: expiryDate
    }
  }))
  
app.use(express.static('dist'))
// last app.use calls right before app.listen():

// custom 404
app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
  })
  
  // custom error handler
  app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })
app.listen(port, host, () => console.log(`Copper Web Server Running on ${host}:${port}`))