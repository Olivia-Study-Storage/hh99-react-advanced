# :microscope: 인증 & 인가

> [학습 목표]
> * 토큰에 대한 이해 <br/>
> * axios를 이용해 API 요청 시 JWT를 서버에 보내기

<br/><br/>

## 1. 토큰이란?
![토큰](https://teamsparta.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff3b407df-67b1-4396-b4a4-71fc28842fb9%2FUntitled.png?id=042136d0-4488-4a02-985d-d3b0580acc65&table=block&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=1090&userId=&cache=v2)

* 클라이언트 보관하면 `암호화된 인증 정보`를 의미한다.

* 세션처럼 서버에서 사용자의 인증 정보를 보관할 필요가 없기 때문에 서버의 부담을 줄여주는 인증 수단이다.

* 웹에서 인증 수단으로 사용되는 토큰은 주로 `JWT`를 이용한다.

<br/>

---

<br/>

## 2. JWT(Json Web Token)란?
### 1) 개념
* 인터넷 상에서 정보를 주고 받을 때 사용하는 토큰 기반의 인증 방식 중 하나이다.

* JSON 데이터를 사용하여 정보를 안전하게 전달하며, 특정 사용자가 인증되었음을 증명하는데 사용된다.

<bn/>

### 2) JWT의 특징
* header, payload, signature 세 부분으로 이루어져 있다.

  * header : 토큰의 유형과 해싱 알고리즘 지정

  * payload : 실제 전송할 정보

  * signature : 토큰이 변조되지 않았음을 검증하기 위한 디지털 서명

* 국제 인터넷 표준 인증 규격 중 하나이다.

* 암호화된 토큰을 누구나 복호화하여 payload를 볼 수 있다.

  * 토큰의 용도는 인증 정보(payload)에 대한 `보호`가 아니라 `위조 방지`이기 때문

* 정보(payload)를 토큰화할 때 signature에 secret key가 필요하고, secret key는 `복호화`가 아니라 토큰이 `유효`한지를 `검증`하는데 사용된다.

<br/>

* `인증 방식`

  1. 클라이언트에서 로그인 요청을 보낸다.

  2. 서버에서 로그인 정보를 확인하고, 해당 사용자에 대한 정보를 JWT로 생성한다.

  3. 서버는 클라이언트에게 JWT를 반환한다.

  4. 이후 클라이언트는 모든 요청에 JWT를 포함시켜 보낸다.

  5. 서버는 클라이언트가 보낸 JWT를 검증하고, 사용자에게 요청한 정보를 반환한다.

<br/>

* 특징

  * 세션 기반의 인증 방식과 달리 서버에서 세션 정보를 유지할 필요가 없으므로 서버의 확장성을 높인다.

  * JWT를 이용한 인증 방식은 RESTful API와 같이 상태를 유지하지 않는 서비스에서도 쉽게 사용할 수 있다.

<br/>

---

<br/>

## 3. JWT 토큰 인증 방식
### 1) JWT 토큰 인증 방식

1. 로그인/회원가입 시 세션 인증

    ![인증](https://teamsparta.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F24ec8fc5-9db0-4f75-af25-54c2b00f3780%2FUntitled.png?id=ab39929c-4a0a-4562-b589-1da3e13633fc&table=block&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=1270&userId=&cache=v2)

<br/>

2. 인가가 필요한 API 요청 / 응답

    ![인가](https://teamsparta.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F566c9bc7-fd4d-46e8-92ef-c7ac95b7c2bb%2FUntitled.png?id=e8b7cf58-a010-40a4-8275-1702ed0a9a5e&table=block&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=1270&userId=&cache=v2)

* `Refresh Token`으로 보안 강화

  * 리소스 접근 인가를 받기 위해 사용되는 토큰을 Access Token이라 부른다.

  * Access Token의 만료 기간을 길게 잡고 인증 상태를 오래 가져갈 경우 서버 부담은 줄어드나 `보안성`에 허점이 있다.

  * 인증 보안이 중요한 서비스의 경우 인증 시 2개의 토큰(Access Token, Refresh Token)을 발급한다.

    * Access Token의 기간은 30분 정도로 짧게 가져간다.

    * Refresh Token의 기간은 1~2주 정도로 길게 잡는 경우가 많다.

    :point_right: 이 경우 서버에서는 A.C.가 만료되었을 때 R.T.가 유효한 상태면 새로운 A.T.을 클라이언트에 발급해주어 인증 상태를 유지할 수 있도록 하고, R.T.만료 시 다시 로그인하라는 메세지를 응답한다.

<br/>

### 2) 세션 인증 vs 토큰 인증
|  | 세&nbsp;션&nbsp;인&nbsp;증 | 토&nbsp;큰&nbsp;인&nbsp;증&nbsp; |
| --- | --- | --- |
| 인증 정보 저장 위치 | 서버 | 클라이언트 |
| 확장성(Scale-out) | 나쁨 | 좋음 |
| 보안성(상대적) | 좋음 | 나쁨 |
| 비용(상대적) | 높음 | 낮음 | 

<br/>

---

<br/>

## 3. 같이 보면 좋을 참고 자료

* [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

* [JWT](https://jwt.io/)

* [Axios 요청 Config](https://axios-http.com/kr/docs/req_config)