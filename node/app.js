const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const userList = require('./user/recommend')
const multer = require('multer')
const fs = require('fs')
const path = require('path')
const { createPost } = require('./lib')
const multerPath = multer({ dest: './img' })
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/img/', express.static(path.join(__dirname, 'img')))
app.use(cors())
app.use(multerPath.any())
app.get('/author/:id', (req, res) => {
  res.json({
    id: req.params.id
  })
})
app.get('/recommend', (req, res) => {
  res.json(userList)
})
app.post('/login', (req, res) => {
  res.json({
    message: 'success',
    data: {
      nickname: 'Nash',
      avatar:
        'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e3a17c305b1070f455202.jpg?x-oss-process=image/resize,m_pad,h_50,w_50',
      id: 1,
      email: '123@123.com'
    }
  })
})
app.post('/register', (req, res) => {
  res.json({
    message: 'success',
    data: {
      nickname: 'Nash1',
      avatar: '',
      email: '123@123.com',
      id: 6
    }
  })
})
app.post('/upload', (req, res) => {
  const file = req.files[0] || null
  if (file && file.filename) {
    const newFileName = file.path + path.parse(file.originalname).ext
    fs.rename(file.path, newFileName, (err) => {
      if (err) {
        res.json({
          message: 'fail',
          data: {}
        })
      } else {
        res.json({
          message: 'success',
          data: {
            path: 'http://localhost:9800/img/' + file.filename + path.parse(file.originalname).ext
          }
        })
      }
    })
  } else {
    res.json({
      message: 'fail',
      data: {}
    })
  }
})
app.post('/create', (req, res) => {
  const result = createPost(req.body)
  res.json({
    message: 'success'
  })
})
app.post('/edit', (req, res) => {
  const { nickname, description, avatar, id } = req.body
  res.json({
    message: 'success',
    data: {
      nickname,
      description,
      avatar,
      id
    }
  })
})
app.listen(9800, () => {
  console.log('start node')
})
