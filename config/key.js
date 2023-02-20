if(process.env.NODE_ENV === 'production') {
    module.exports = require('./prod')
} else if(process.env.NODE_ENV === 'development'){
    module.exports = require('./dev')
}
//process.env는 개발환경을 의미함
//'develop'이면 현재 내 local에서 개발 중인 환경
//'product'는 배포했을 때의 환경