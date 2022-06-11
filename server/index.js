const express = require('express')
const app = express()

app.all('/', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  next()
})

app.get('/', (_, res) => {
  console.log('GOT!')
  res.send('Hello world!')
})

app.listen(8081, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:8081`)
})

module.exports = app
