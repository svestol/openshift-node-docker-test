const app = require('express')()

app.get('/', (req, res) => {
  console.log(req)
  res.json({ hello: 'world' })
})

app.listen(8080, () => {
  console.log('running at ', 8080)

  console.log(process.env)
})
