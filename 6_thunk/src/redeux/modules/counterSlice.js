import { createSlice } from '@reduxjs/toolkit';

// * 초기 상태값 설정
const initialState = {
  number: 0,
};


// * 아래의 세가지(name, initialState, reducer)를 인자로 가지는 API
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    plusNumber: (state, action) => {
      state.number = state.number + action.payload;
    },
    minusNumber: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});
export default counterSlice.reducer;
export const { plusNumber, minusNumber } = counterSlice.actions;