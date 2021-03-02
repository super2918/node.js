const express = require('express'); //라이브러리를 
const app = express(); // 라이브러리를 객체로 만드러 주세요.

app.listen(서버 포트, 띄운후 실행할 함수) ;  // 서버를 열수 있다.

포트란? 
컴퓨터와 외부와 통신할 수 있는 구멍 > 포트라고 한다.


nodemon 서버를 자동으로 끄고/켜는 라이브러리
yarn add global nodemon -> 설치 
yarn nodemon server.js 라고 해야 돌아감
npm install -g nodemon


/ > 하나만 있으면 홈페이지라는 뜻 

- sendFile() 함수를 정의하면 파일을 보내준다.
- __dirname 현재 파일의 경로를 뜻한다.
```
app.get('', callback 단계적으로 하는 것 ( 요청, 응답 )  => {
  요청 : 어떤정보를 요청하는지
  응답 : 어떤식으로 응답이 되는지 
  실행할 것들 적어 넣는다. 
})
```

form 요소에 
action /'경로', method 이거가 꼭 들어가야 하는데 어떤방식으로 요청을 할 것인가?
데이터, 비밀번호 등등 POST를 넣어야 한다.

```
yarn add body-parser
npm install body-parser
```

node.js modules
body-parser
클라이언트 POST requset data의 body로부터 파라미터를 편하게 추출한다.

```
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}))
```

POST요청으로 서버에 데이터를 전송하고 싶을 경우 
form 데이터의 경우는  input에 name을 써야한다. 구분을 시켜주는것


API (Application Programming Interface)
서버와 고객간의 통신 규약 = 서버에게 요청해서 데이터를 가져오는 방법


REST API 
- Representational State Transfer  

http 요청 시스템 + REST원칙 의해사 사용하면 좋지 않을까?

REST 6 개 원칙

1. Uniform Interface

인터페이스는 일관성

– 하나의 URL로는 하나의 데이터를 가져와야함 (하나를 가져오기 위한 두개의 URL을 만들지 말자)

– 간결하고 예측가능하게 짜야한다. (URL 하나를 알면 둘을 알게)

– URL 이름짓기 관습을 잘 따라야한다.

  명사로 이름을 작성해야한다. 명사를 써주는 것이 간결하게 작업을 한다.


이름짓기 관습

다른 곳에서 URL 대신 URI 이런 용어를 많이 쓰기도 하는데 
URI는 자료를 넘버링하고 분류하고 지칭하는 방법이라 보시면 됩니다. URL과 비슷하지만 조금 더 큰 의미 
도서관에서 책 분류할 때 URI에 의해서 분류하기도 합니다. 
 

2. Client-server 역할 구분하기

고객들은 그냥 URL 하나만 알면 서버에 있는 자료를 갖다쓸 수 있습니다. 

고객에게 서버역할을 맡기거나
고객에게 DB에 있는 자료를 직접 꺼내라고 하든지 그런 식으로 코드를 짜시면 안된다.


3. Stateless
요청들은 각각 독립적으로 처리되어야합니다. 
요청1이 성공해야 요청2를 보내주고 그런 식으로 요청간의 의존성이 존재하는 코드를 짜시면 안된다.
 

4. Cacheable

요청을 통해 보내는 자료들은 캐싱이 가능해야한다.
그리고 캐싱가능하다고 표시하거나 캐싱 기간을 설정해주어야 한다고 한다.

 
* 캐싱이뭐냐면

네이버를 방문하면 크롬 브라우저는 자동으로 자주 사용하는 이미지 파일, CSS 파일 등을 하드에 저장해놓습니다. 
별로 바뀔일 없는 네이버 로고나 아이콘 같은거요.
하드에 저장해놓고 네이버 방문할 때 네이버서버에 네이버 로고주세요~라고 요청하지 않고 하드에서 온다.
이 행위를 캐싱이라고 한다.

 

5. Layered System

요청처리하는곳, DB에 저장하는곳 이런 여러가지 단계를 거쳐서 요청을 처리해도 된다.
여러개의 레이어를 거쳐서 요청을 처리하게 만들어도 된다고 합니다.
 

6. Code on Demand

서버는 고객에게 실제 실행가능한 코드를 전송해줄 수도 있다.

좋은 REST API
이름 짓기 원칙: 
- URl을 명사로 작성을 추천
- 하위문서를 나타날땐 / 
- 파일 확장(.html)를 쓰지 말기
- 띄어쓰기는 대시 (-) 이용
- 자료하나당 하나의 URL


URL 이름짓기 관습

 

instagram.com/explore/tags/kpop
instagram.com/explore/tags/food
facebook.com/natgeo/photos
facebook.com/bbc/photos


 

– 단어들을 동사보다는 명사 위주로 구성함

– 응용해서 다른 정보들을 쉽게 가져올 수 있을 정도로 일관성 있음 

– 대충 봐도 어떤 정보가 들어올지 예측이 가능함 

 


이외에도 이름을 잘 지을 수 있는 방법은

 

– 띄어쓰기는 언더바_대신 대시-기호-사용

– 파일 확장자 쓰지 말기 (.html 이런거)

– 하위 문서들을 뜻할 땐 / 기호를 사용함 (하위폴더같은 느낌)


 