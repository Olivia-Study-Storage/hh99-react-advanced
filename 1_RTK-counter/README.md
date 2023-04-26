# :microscope: Redux -> Redux Toolkit
## 1) 툴킷 설치하기

```bash
yarn add react-redux @reduxjs/toolkit
```

<br/>

## 2) counter 프로그램으로 코드 비교
| 비교 | Basic Redux | Redux Toolkit |
| --- | --- | --- |
| configStore.js | store 생성 시 `rootReducer`, `createStore` 사용 | store 생성 시 `configureStore` 사용
| counter.js | Action Value, Action Creator, Reducer 모두 타이핑하여 생성 | `createSlice` API를 이용해 한 번에 생성 (reducer와 action creator 모두 생성) |