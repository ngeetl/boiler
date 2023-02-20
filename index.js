//node.js환경에서의 백앤드(서버) 시작점

const express = require('express')
const app = express()
const port = 3300
const { User } = require('./models/User')

const config = require('./config/key')

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
  userNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false 
}).then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))


//bodyParser 미들웨어
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.send('node.js는 서버로 js파일을 구동하는 구나!!')
})

app.post('/register', (req, res) => {
  //회원가입 할 때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.

  const user = new User(req.body)
  //정보를 body에 담음

  //정보를 몽고DB에 저장함
  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success: ture
    })
  })
})


app.listen(port, () => {
  console.log(`port에 제대로 연결되었으면 출력하는 멘트\nport번호: ${port}`)
})