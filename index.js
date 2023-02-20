//node.js환경에서의 백앤드 시작점

const express = require('express')
const app = express()
const port = 3300

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://johnahn:abcd1234@react-blog-dc5kl.mongodb.net/text?retryWries=true&w=majority', {
  userNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false 
}).then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('node.js는 서버로 js파일을 구동하는 구나!')
})

app.listen(port, () => {
  console.log(`port에 제대로 연결되었으면 출력하는 멘트\nport번호: ${port}`)
})