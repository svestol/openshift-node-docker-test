const app = require('express')()

app.get('/', (req, res) => {
  res.json({ hello: 'world' })
})

app.listen(8000, () => {
  console.log('running')
})
