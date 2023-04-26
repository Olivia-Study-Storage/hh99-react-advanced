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