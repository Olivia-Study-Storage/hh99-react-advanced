# :microscope: 인증 & 인가

> [학습 목표]
> 1. 인증/인가의 개념
> 2. 쿠키에 대한 이해

<br/><br/>

## 1. 인증 & 인가
### 1) 인증(Authentication) vs 인가(Authorization)
![인증과 인가](https://teamsparta.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4cd628e0-e537-4482-88b2-1e343d6b1559%2FUntitled.png?id=7e232f8a-37ca-410a-a0f2-5e854539faed&table=block&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=1540&userId=&cache=v2)

* `인증(Authentication)`

  * 서비스를 이용하려는 유저가 `등록된 회원`인지 확인하는 절차

* `인가(Authorization)`

  * `특정 리소스에 접근할 수 있는 권한`이 있는지 확인하는 절차

* `Quiz` 유저가 마이페이지에서 서버에 API 요청으로 개인정보를 받아오는 요청을 할 떄, 서버는 클라이언트에게 `인증`을 해주는지 `인가`를 해주는지?

  * :point_right: 유저가 마이페이에 접근한다는 것 자체가 이미 로그인이 되어있는 상태이므로 `인가`를 해주는게 더 낫다고 생각하면 됨!

<br/>

### 2) HTTP 프로토콜 통신의 특징
* `무상태(Stateless)`
  ![무상태](https://teamsparta.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F59468a9c-7c8d-4e78-9a25-6c3f45847359%2FUntitled.png?id=291f03c1-efcf-4bea-a5fa-34bdcea5b0ca&table=block&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=1030&userId=&cache=v2)

  * 서버는 클라이언트의 상태를 기억하지 않는다.

  * 따라서 각 요청마다 서버에서 요구하는 모든 상태 정보를 담아서 요청해야 한다.

  * 상태값은 매 요청마다 클라이언트가 가지고 오기 때문에, 서버는 클라이언트의 상태를 별도로 기억할 필요 없이 요청한대로 응답한다.

  * 무상태라는 특성 덕분에 동일한 서버를 여러 개로 확장시킬 수 있다. (Scale-Out)

<br/>

* `비연결성(Connectionless)`
  ![비연결성](https://teamsparta.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fdf1b2407-550c-4b34-8b92-9c2b074f829d%2FUntitled.png?id=663820fa-ac97-4b45-99ad-144ca503433a&table=block&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=1500&userId=&cache=v2)

  * 서버와 클아이언트는 연결되어있지 않다. (서버 입장에서는 매번 새로운 요청)

  * 비연결성으로 인해 최소한의 서버 자원으로 서버를 유지할 수 있다.

  * 다만 각 사용자별 요청이 잦은 서비스의 경우 오히려 이러한 비연결성이 비효율적일 수 있다.

<br/><br/>

## 2. 쿠키
* `브라우저에 저장`되는 텍스트 파일로, `key-value` 형태로 저장된다.

* 무상태와 비연결성이라는 HTTP의 특징에도 불구하고 마치 서버가 클라이언트의 인증 상태를 기억하는 것처럼 구현할 수 있는 수단이다.

* 쿠키는 별도로 삭제처리하거나 유효기간이 만료되지 않는 이상 서버와 통신할 때 자동으로 주고 받게 된다.

* 서버에 특정 API를 요청 시
  
  * 서버가 응답 시 `header` 안에 `set-cookie` 속성으로 쿠키 정보를 담아 주면,

  * 응답을 받은 브라우저는 쿠키를 브라우저에 `자동으로` 저장한다.

  * 저장된 쿠키 정보는 `개발자도구 → 애플리케이션 → 저장용량 → 쿠키`에서 확인 가능하다.

* 서버에서 HTTP를 요청할 때마다 브라우저에 저장되어 있는 쿠키는 `자동으로` 서버에 보내진다.

  * 단, 동일한 Origin 또는 CORS를 허용하는 Origin에만 쿠키를 보낸다.

  * 즉, 유튜브 서버에서 주고 받은 쿠키는 유튜브 이용 시에만 주고받을 수 있는 것!

  * 쿠키는 클라이언트에서 직접 추가/수정/삭제할 수 있다.

  <br/>

  > [참고] Origin이란? <br/>
  > ![origin](https://teamsparta.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fccc90ddf-4a82-494f-a153-ad4037dc7925%2FUntitled.png?id=b4f47ee6-1e2d-474d-a2ef-09f3e32b95f7&table=block&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=1030&userId=&cache=v2)
  > * 출처! 즉, protocol + host + port

  <br/>

  > [참고] CORS란?
  > * Cross Origin Resource Sharing(CORS)는 다른 출처에 리소스를 요청하는 것을 허용하는 정책을 말한다. <br/>
  > * 브라우저는 보안 상의 이유로 기본적으로 `Same Origin Policy(SOP)`를 원칙으로 하고 있으나, <br/>
  > * 서버와 클라이언트 각각 CORS 설정을 통해 `상호 합의`된 웹사이트는 예외적으로 `서로 다른 출처(Cross-Origin)`임에도 API 요청이 가능하다.