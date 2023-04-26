import { createSlice } from '@reduxjs/toolkit';
import React from "react";
import { v4 as uuidv4 } from "uuid";

// ! AS-IS
// * modules에서 내보낸게 무엇인지를 알아야 한다!
// 1. action item을 만들어서 action creator들을 내보냈다.
//    - 각각 컴포넌트에서 dispatch할때 해당 action creator를 사용했다.
//    - action creator를 이용해 type과 payload를 가진 action 객체를 만들었다.
// 2. reducer를 직접 만들었다.
// => 따라서 action creator, reducer를 export하고 action value를 정의했었다.

// action items
// const ADD_TODO = "ADD_TODO";
// const REMOVE_TODO = "REMOVE_TODO";
// const SWITCH_TODO = "SWITCH_TODO";

/**
 * 메서드 개요 : todo 객체를 입력받아, 기존 todolist에 더함
 * 2022.12.16 : 최초작성
 *
 * @param {todo 객체} payload
 * @returns
 */
// export const addTodo = (payload) => {
//   return {
//     type: ADD_TODO,
//     payload,
//   };
// };

/**
 * 메서드 개요 : todo의 id를 입력받아, 일치하는 todolist를 삭제
 * 2022.12.16 : 최초작성
 *
 * @param {todo의 id} payload
 * @returns
 */
// export const removeTodo = (payload) => {
//   return {
//     type: REMOVE_TODO,
//     payload,
//   };
// };

/**
 * 메서드 개요 : todo의 id를 입력받아, 일치하는 todo 아이템의 isDone을 반대로 변경
 * 2022.12.16 : 최초작성
 *
 * @param {*} payload
 * @returns
 */
// export const switchTodo = (payload) => {
//   return {
//     type: SWITCH_TODO,
//     payload,
//   };
// };

// initial states
const initialState = [
  {
    id: uuidv4(),
    title: "리액트 공부하기",
    contents: "빨리빨리 암기하기",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "스프링 공부하기",
    contents: "인강 열심히 들어보기!!",
    isDone: true,
  },
  {
    id: uuidv4(),
    title: "데이트",
    contents: "홍대입구역에서 3시까지",
    isDone: false,
  },
];

// reducers
// const todos = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO: // 기존의 배열에 입력받은 객체를 더함
//       return [...state, action.payload];
//     case REMOVE_TODO: // 기존의 배열에서 입력받은 id의 객체를 제거(filter)
//       return state.filter((item) => item.id !== action.payload);
//     case SWITCH_TODO: // 기존의 배열에서 입력받은 id에 해당하는 것만 isDone을 반대로 변경(아니면 그대로 반환)
//       return state.map((item) => {
//         if (item.id === action.payload) {
//           return { ...item, isDone: !item.isDone };
//         } else {
//           return item;
//         }
//       });
//     default:
//       return state;
//   }
// };

// export
// export default todos;

// ! TO-BE
// * redux toolkit에서는 action value, action creator, reducer를 한 번에 생성할 수 있도록 API를 제공한다.

const todosSlice = createSlice({
  // * 이 모듈의 이름
  name: 'todos',
  // * 이 모듈의 초기 상태 값
  initialState,
  // * 이 모듈의 Reducer 로직
  reducers: {
    // * reducer가 자동으로 만들어짐과 동시에 각 key의 이름으로 action creator가 만들어진다.
    addTodo: (state, action) => {
      // 기존의 배열에 입력받은 객체를 더함
      return [...state, action.payload];
    },
    removeTodo: (state, action) => {
      // 기존의 배열에서 입력받은 id의 객체를 제거(filter)
      return state.filter((item) => item.id !== action.payload);
    },
    switchTodo: (state, action) => {
      // 기존의 배열에서 입력받은 id에 해당하는 것만 isDone을 반대로 변경(아니면 그대로 반환)
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    },
  }
});

// * 컴포넌트에서 사용하기 위해 action creator를 export 한다!
export const { addTodo, removeTodo, switchTodo } = todosSlice.actions;
// * configStore에 등록하기 위해 reducer를 export default 한다!
export default todosSlice.reducer;