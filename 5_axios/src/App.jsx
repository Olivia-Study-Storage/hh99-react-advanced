import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState(null);

  // * 비동기 함수 생성 (async-await 이용)
  const fetchTodos = async () => {
    // await가 없으면 마운트가 되자마자 실행되기 때문에 'pending'으로 조회된다!
    const { data } = await axios.get('http://localhost:4000/todos');
    // 서버로부터 fetching한 데이터를 useState의 state로 set
    setTodos(data);
  };

  // 생성한 함수를 컴포넌트가 mount 됐을 떄 실행하기 위해 useEffect를 사용
  useEffect(() => {
    // effect 구문에 생성한 함수를 넣어 실행
    fetchTodos();
  }, [])
  

  return (
    <div>
    {
      todos?.map((item) => {
        return (
          <div key={item.id}>
            {item.id} : {item.title}
          </div>
        )
      })
    }
    </div>
  )
}

export default App