# :microscope: 인증 & 인가

> [학습 목표]
> * 세션에 대한 이해

<br/><br/>

## 1. 세션이란?
![세션 알림창](https://teamsparta.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff4618563-8fad-4376-b0fa-577f68a4d43e%2FUntitled.png?id=8025d0c4-b871-4f83-940d-a43b71c1ae1c&table=block&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=1030&userId=&cache=v2)

* 사용자와 서버 간의 `연결이 활성화된 상태`를 의미하는 개념이다.

* 또는 `인증이 유지`되고 있는 상태를 말한다.

* 로그인 성공 → 서버에서 세션 생성 및 저장 (key-value 형식) -> key(sessionId)를 브라우저에 응답 (by.쿠키)

<br/><br/>

## 2. 쿠키-세션 인증 방식

1. 로그인/회원가입 시 세션 인증

    ![인증](https://teamsparta.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffc876fd8-84a3-469b-9637-86067d28b068%2FUntitled.png?id=4b85f2c9-96ff-4578-bcbf-089a41e26c3f&table=block&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=1030&userId=&cache=v2)

* 로그인/회원가입 성공 시 서버에서 쿠키에 sessionId를 담아서 보내준다.

  * 세션 유지 상태 : 서버에서 관리하는 세션 저장소에 회원 데이터가 있다.

  * 세션 만료 상태 : 서버에서 관리하는 세션 저장소에 회원 데이터가 없다.

<br/>

2. 인가가 필요한 API 요청 / 응답

    ![인가](https://teamsparta.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe970e3ca-7f30-4c53-8227-af10c264915c%2FUntitled.png?id=7e665bed-b578-48cf-97ba-bc3f77bec142&table=block&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=1030&userId=&cache=v2)

* 서버는 인가가 필요한 API 요청을 받으면 클라이언트 쿠키에 들어있는 sessionId를 세션 저장소에 조회

  * 존재하면 DB에 데이터를 조회하여 응답

