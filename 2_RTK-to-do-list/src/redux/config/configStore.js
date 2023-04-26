import { createStore } from "redux";
import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import todos from "../modules/todos";

// * AS-IS
// 1. create rootReducer with reducers
// const rootReducer = combineReducers({
//   todos,
// });

// 2. create store
// const store = createStore(rootReducer);

// 3. export
// export default store;

// * TO-BE
const store = configureStore({
  // 객체의 key가 reducer, value에 넣으려는 reducer 입력
  reducer: {
    todos,
  }
});

export default store;