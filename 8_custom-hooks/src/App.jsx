import React from 'react';
import useInput from './hooks/useInput';

// * 기존 useState로만 모든 것을 관리했을 때의 문제점
// input의 개수가 증가하면 useState와 이벤트 핸들러도 같이 증가해 코드의 중복이 생긴다!

function App() {
  const [name, onChnageNameHandler] = useInput();
  const [password, onChangePasswordHandler] = useInput();
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={onChnageNameHandler}
      />
      <input
        type="text"
        value={password}
        onChange={onChangePasswordHandler}
      />
    </div>
  )
}

export default App