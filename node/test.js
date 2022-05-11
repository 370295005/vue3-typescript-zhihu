const express = require('express')
const path = require('path')
const app = express()
app.use('/img/', express.static(path.join(__dirname, 'img')))
app.listen(9801, () => {
  console.log(`App listening at port 9801`)
})
