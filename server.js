const express = require('express');
const app = express();
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

app.listen(8080, function(){
  console.log('listening on 8080');
}); 

// get요청 서버를 처리하느 코드
// 누군가 /pet으로 방문하면 pet관련된 안내문을 띄워주자
app.get('/pet',  function(req, res) {
  res.send('pet 용품을 쇼핑할 수 있는 페이지 입니다.')
});

app.get('/beauty', function(req, res) {
  res.send('뷰티 용품을 쇼핑할 수 있는 페이지 입니다.')
})
// / 홈페이지 - get요청을 할때에 html 파일을 보여주는
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.get('/write', (req, res) => {
  res.sendFile(__dirname + '/write.html');
})

// 서버 정보 전달 
// 어떤 사람이 /add 경로로 Post로 요청을 할 경우 원하는 것을 해주세요.
app.post('/add', (req, res) => {
  console.log(req.body.title)
  console.log(req.body.date)
  res.send('전송 완료');
})
