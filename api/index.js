const express = require('express')
const app = express()

app.get('/test', (req, res) => { // eslint-disable-line
  res.send('API server works fine!')
})

module.exports = {
  path: '/api',
  handler: app
}
