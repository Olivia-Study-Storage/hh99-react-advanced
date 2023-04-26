import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { plusNumber, minusNumber } from './redeux/modules/counter';

function App() {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => dispatch(plusNumber(1))}>+</button>
      <button onClick={() => dispatch(minusNumber(1))}>-</button>
    </div>
  )
}

export default App