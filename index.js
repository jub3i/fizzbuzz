const fs = require('fs')
const express = require('express')
const app = express()
const port = 5000

app.use('/public', express.static('./public'))

app.get('/', function (req, res) {
  res.send(fs.readFileSync('./public/index.html', 'utf8'))
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
