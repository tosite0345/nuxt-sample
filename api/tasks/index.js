const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', (req, res) => { // eslint-disable-line
  const mysql = require('mysql')
  const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'nuxt'
  })
  conn.connect()
  conn.query('select * from tasks;', (err, rows) => {
    if (err) {
      console.log(err)
    }
    const data = JSON.stringify(rows)
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(data)
  })
})

app.post('/', (req, res) => {
  console.log(req.body)
})

module.exports = {
  path: '/api/tasks',
  handler: app
}
