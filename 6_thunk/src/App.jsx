import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __plusNumber, __minusNumber } from './redeux/modules/counterSlice';

function App() {
  const globalNumber = useSelector((state) => state.counter.number);
  const [number, setNumber] = useState(0);
  
  const dispatch = useDispatch();

  const onPlusClickHandler = () => dispatch(__plusNumber(+number));
  const onMinusClickHandler = () => dispatch(__minusNumber(+number));

  return (
    <div>
      <h1>{globalNumber}</h1>
      <input
        type="number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={onPlusClickHandler}>더하기</button>
      <button onClick={onMinusClickHandler}>빼기</button>
    </div>
  )
}

export default App