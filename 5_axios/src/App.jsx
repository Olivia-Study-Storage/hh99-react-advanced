import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // 새롭게 생성하는 todo를 관리하는 state로, json 형식을 맞추기 위해 객체 형식으로 선언
  const [iptValue, setIptValue] = useState({
    title: '',
  });
  const [todos, setTodos] = useState(null);

  // * 비동기 함수 생성 (async-await 이용)
  const fetchTodos = async () => {
    // await가 없으면 마운트가 되자마자 실행되기 때문에 'pending'으로 조회된다!
    const { data } = await axios.get('http://localhost:4000/todos');
    // 서버로부터 fetching한 데이터를 useState의 state로 set
    setTodos(data);
  };

  const onSubmithandler = async () => {
    axios.post('http://localhost:4000/todos', iptValue);
    // 새로고침해서 서버에서 데이터를 받아온것처럼 상태를 동기화시켜줌
    setTodos(...todos, iptValue);
  };

  // 생성한 함수를 컴포넌트가 mount 됐을 떄 실행하기 위해 useEffect를 사용
  useEffect(() => {
    // effect 구문에 생성한 함수를 넣어 실행
    fetchTodos();
  }, [])
  

  return (
    <div>
      {/* input area */}
      <div>
        <form onSubmit={e => {
            e.preventDefault();
            // 버튼 클릭 시, ipt에 들어있는 값(state)를 이용해 DB에 저장 (POST 요청)
            onSubmithandler();
          }}
        >
          <input
            type="text"
            value={iptValue.title}
            onChange={(e) => setIptValue({title: e.target.value})} />
          <button>추가</button>
        </form>
      </div>
      
      {/* data area */}
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
    </div>
  )
}

export default App