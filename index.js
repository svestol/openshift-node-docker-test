const app = require('express')()

app.get('/', (req, res) => {
  res.json({ hello: 'world' })
})

app.listen(process.env.PORT, () => {
  console.log('running')
})
