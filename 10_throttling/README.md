# throttling & debouncing

> [학습 목표]
> 1. throttling과 debouncing의 개념
> 2. lodash를 이용하여 throttling과 debouncing을 적용
> 3. 리액트에서 throttling과 debouncing 시 useCallback을 적용

<br/><br/>

# 1. Throttling & Debouncing이란?
* Throttling & Debouncing은 `짧은 시간 간격으로 연속해서` 이벤트가 발생했을 때 과도한 이벤트 핸들러 호출을 방지하는 기법이다.

<br/>

### 1) Throttling 이란?
![Throttling](https://bit.ly/428MgXa)

* 시스템에서 처리할 수 있는 요청의 양을 제한하거나 조절하는 것을 의미

* 보안, 성능 및 비용 관리를 위해 사용

* 서버에 부하가 많이 걸리면 서버가 다운될 수 있으므로, 서버에 들어오는 요청의 양을 조절해 서버의 안정성을 유지할 필요가 있음

* 이때 사용하는 방법 중 하나가 Throttling

* `짧은 시간 간격으로 연속해서` 발생한 이벤트들을 단위(delay)로 그룹화하여 처음 또는 마지막 이벤트 핸들로만 호출되도록 하는 것

* 주로 사용되는 예 : `무한 스크롤`

<br/>

### 2) Debouncing 이란?
![Debouncing](https://teamsparta.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F32ba014d-2b4c-4636-88d5-48298c3bafca%2FUntitled.png?id=270d6d51-5728-461c-8adb-865804a4690b&table=block&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=1260&userId=&cache=v2)

* 입력 장치에서 발생하는 중복 신호를 방지하기 위한 기술로, 입력 신호가 반복해서 발생할 때 이를 무시하고 최종 입력 신호를 받아들이도록 만드는 것

* `짧은 시간 간격으로 연속해서` 이벤트가 발생하면 이벤트 핸들러를 호출하지 않다가 마지막 이벤트로부터 일정 시간(delay)이 경과한 후에 한 번만 호출하도록 하는 것

* 주로 사용되는 예 : 입력값 실시간 검색, 화면 resize 이벤트

<br/>

### 3) 메모리 누수(Memory Leak)란?
* 프로그램이 동적으로 할당한 메모리를 해제하지 않고 계속해서 점유하는 상황

* 시스템 성능 저하, 안정성 문제, 보안 취약점 등을 유발할 수 있음

<br/>

### 4) (Q&A) setTimeout 이 메모리 누수(Memory Leak)를 유발하는 지?
* 상황에 따라 메모리 누수를 일으킬 수도 있고 아닐 수도 있음

* 하나의 페이지에서 페이지 이동없이 setTimeout을 동작시키고 타이머 함수가 종료될 때까지 기다린다면 메모리 누수는 없음

* 리액트로 만든 SPA 웹사이트는 페이지 이동 시 컴포넌트가 언마운트 됨

* 페이지 이동 전에 setTimeout으로 인해 타이머가 동작중인 상태에서 clearTimeout을 안해주고 페이지 이동 시 컴포넌트가 언마운트가 되었음에도 불구하고 타이머는 여전히 메모리를 차지하고 동작함 <br/>
:point_right: 이 경우 메모리 누수에 해당한다고 할 수 있음

<br/><br/>

# 2. lodash 적용 및 useCallback을 써야하는 이유
* 자바스크립트 유틸리티 라이브러리

* 함수형 프로그래밍 개념과 성능 최적화 기법을 활용하여, 자바스크립트 코드의 생산성과 성능을 개선하는데 사용