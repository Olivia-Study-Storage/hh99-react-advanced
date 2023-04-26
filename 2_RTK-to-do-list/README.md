# :microscope: Redux -> Redux Toolkit
## 1) 툴킷 설치하기

```bash
yarn add react-redux @reduxjs/toolkit
```

<br/>

## 2) to do list 프로그램으로 코드 비교
| 비교 | Basic Redux | Redux Toolkit |
| --- | --- | --- |
| configStore.js | store 생성 시 `rootReducer`, `createStore` 사용 | store 생성 시 `configureStore` 사용 |
| todos.js | Action Value, Action Creator, Reducer 모두 타이핑하여 생성 | `createSlice` API를 이용해 한 번에 생성하며 name(모듈의 이름), initialState(초기 상태값), reducers(모듈의 reducer 로직) 작성 |
| todos.js에서 내보내는 방법 | 각각의 action creator를 export | 구조분해할당으로 `action creator`를 `export`, configStore에 등록하기 위해 `todosSlice.reducer`를 `export default` |

<br/>

### `configStore.js`
* 모듈(Slice)이 여러 개인경우 추가할 때마다 reducer 안에 각 모듈의 `slice.reducer`를 추가해야 한다.

<br/>

### `todos.js`
* Reducer만 만들어주면 todosSlice 리듀서 객체 안에서 만들어주는 함수가 리듀서의 `로직`이 되면서도 `action creator`가 된다.

* 또한 `action value`까지 함수의 이름을 따서 자동으로 생성한다.

* 일반 Redux에서 export를 통해 각각의 action creator를 내보내주었던 것을 `couterSlice를 구조분해할당하여 export`하는 것 과 `couterSlice.reducer만 export default`하는 것을 통해 동일하게 내보낼 수 있다.

<br/>

### `etc.`
* modules 안에 있는 파일 이름은 `counter.js`, `todos.js` 또는 `counterSlice.js`, `todoSlice.js` 와 같은 형식 중 자유롭게 선택 가능하다.

<br/>

## 3) RTK의 또다른 장점 - `immer`
* redux toolkit 안에 `immer`라는 기능이 `내장`되어 있다.

* `immer`를 사용하면 상태를 업데이트 할 때, `불변성을 신경쓰지 않으면서` 업데이트를 해도 `immer가 불변성 관리를 대신` 해준다!

  * 따라서 이전에는 원본 배열을 훼손하는 `push` 등의 사용이 권장되지 않았지만 RTK에서는 사용이 가능하다.

<br/><br/>

---

<br/>

# :microscope: Redux Devtools

## 1) devtools 소개
* redux를 사용하면, redux devtools를 사용할 수 있다.

* 현재 프로젝트의 **state 상태, 어떤 action이 일어났을 때 그 action이 무엇인지와 그것으로 인해 state가 어떻게 변경되었는지 등을** 편리하게 파악 가능하다. 

* [크롬 확장 프로그램 설치 링크](https://bit.ly/3naItJZ)

<br/>

## 2) devtools 사용법
* 리액트 프로젝트에서 리덕스를 사용하고 있으면 플러그인에 녹색으로 불이 켜진다.

* 개발자도구 탭에서 redux 메뉴를 이용해 다양한 정보를 볼 수 있다.

<br/><br/>

---

<br/>

# :microscope: Flux 패턴

## 1) flux 패턴이란?
* 데이터의 흐름을 단방향으로 유지하고 상태 관리를 위한 아키텍처 디자인 패턴이다.

* Flux 패턴은 기본적으로 세 가지 주요 요소로 이루어져 있다.
  * `Actions`: 앱에서 일어나는 이벤트를 나타내는 객체

  * `Dispatcher`: Action을 받아서 Store에 전달하는 역할

  * `Store`: 앱의 상태를 저장하고 변경된 상태를 View에 전달

* Flux 패턴의 구성 요소들은 `단방향 데이터 흐름`을 따른다.
  * View에서 사용자 action 발생 -> action 생성되어 dispatcher로 전달 -> dispatcher는 store에 action을 전달하여 store의 상태 업데이트 -> 변경된 상태 view에 전달
  
  * 이러한 단방향 데이터 흐름은 예측 가능성과 유지 보수성을 높이는데 도움이 된다.

  * 즉, Flux 패턴은 `단방향 데이터 흐름`을 유지하는 아키텍처 디자인 패턴이다!

* Flux 패턴은 Meta에서 React를 개발할 때 사용한 아키텍처 디자인 패턴 중 하나이다.

* 또한 Redux는 JavaScript 애플리케이션에서 Flux 패턴을 구현하는데 사용되는 라이브러리이다.

<br/>

> :question: 아키텍처 디자인과 디자인 패턴의 차이? <br/>
> * 아키텍처 디자인은 전체 시스템의 구조와 구성 요소 간의 관계를 설계하는 것을 의미한다. (MVC패턴, MVVM 등) <br/>
> * 디자인 패턴은 소프트웨어 개발에서 자주 발생하는 문제를 해결하는 패턴을 추상화한 것이다. (Singletone, Obsever 등) <br/>
> * 즉, 아키텍처 디자인은 **전체적인 시스템 구조와 구성 요소 간의 관계**를 다루는 것이고, 디자인 패턴은 **개별적인 문제에 대한 해결책을 추상화**한 것이다.

<br/>

## 2) 읽어볼만한 관련 아티클
* [만화로 보는 Flux](https://bit.ly/3Ls5wJH)

* [Flux와 Redux의 관계](https://bit.ly/3L77SfB)