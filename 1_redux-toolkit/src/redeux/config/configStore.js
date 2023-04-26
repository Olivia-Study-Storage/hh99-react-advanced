import { createStore, combineReducers } from 'redux';
import counter from '../modules/counter';
import { configureStore } from '@reduxjs/toolkit';

// * AS-IS: Basic Reducer
// const rootReducer = combineReducers({
//   counter,
// });
// const store = createStore(rootReducer);

// * TO-BE: Redux Toolkit
const store = configureStore({
  reducer: {
    // counter: counter일 경우 한 단어로 생략 가능
    counter,
  }
});

export default store;