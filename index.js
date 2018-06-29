const app = require('express')()

app.get('/', (req, res) => {
  res.json({ hello: 'world' })
})

app.listen(8080, () => {
  console.log('running at ', 8080)
})
