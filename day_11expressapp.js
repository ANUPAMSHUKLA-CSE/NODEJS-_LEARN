const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/o', (req, res) => {
    res.send('Hello others how are u HI!')
  })
  app.get('/anupam', (req, res) => {
    res.send('Hello anupam the coder')
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})