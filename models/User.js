const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        tirm: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
        //관리자인지 회원인지
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
        //토큰 유효기간
    }
})

const User = mongoose.model('User', userSchema)
//스키마를 모델로 감싸줌

module.exports = { User}