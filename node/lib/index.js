const fs = require('fs')
module.exports = {
  createPost(params) {
    fs.readFile('./post/index.json', (err, data) => {
      let postData = data.toString()
      postData = JSON.parse(postData)
      postData.data.push(params)
      const str = JSON.stringify(postData)
      fs.writeFile('./post/index.json', str, () => {})
    })
  }
}
