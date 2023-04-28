import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// * thunk 생성, thunk는 보통 이름 앞에 언더바 두 개를 붙임
// * 2개의 input이 들어감
//   1) 이름 : 의미는 크게 없음
//   2) 함수
export const __plusNumber = createAsyncThunk(
  "PLUS_NUMBER_WAIT",
  (payload, thunkAPI) => {
    // 수행하고 싶은 동작 기술: 3초를 기다리게 구현해보기
    setTimeout(() => {
      // 컴포넌트에서 dispatch를 부르는 것과 비슷함
      thunkAPI.dispatch(plusNumber(payload));
    }, 3000);
  }
);

export const __minusNumber = createAsyncThunk(
  "MINUS_NUMBER_WAIT",
  (payload, thunkAPI) => {
    setTimeout(() => {
      thunkAPI.dispatch(minusNumber(payload));
    }, 3000);
  }
);

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