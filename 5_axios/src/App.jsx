import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // 새롭게 생성하는 todo를 관리하는 state로, json 형식을 맞추기 위해 객체 형식으로 선언
  const [iptValue, setIptValue] = useState({
    title: '',
  });
  const [targetId, setTargetId] = useState('');
  const [editContent, setEditContent] = useState('');
  const [todos, setTodos] = useState([]);

  // ! 조회 함수
  // * 비동기 함수 생성 (async-await 이용)
  const fetchTodos = async () => {
    // await가 없으면 마운트가 되자마자 실행되기 때문에 'pending'으로 조회된다!
    // const { data } = await axios.get(`http://localhost:4000/todos`);
    // * env 환경변수 파일 이용
    const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`);
    // 서버로부터 fetching한 데이터를 useState의 state로 set
    setTodos(data);
  };

  // ! 추가 함수
  // state로 관리 중이므로 인자를 따로 받지 않아도 됨
  const onSubmithandler = async () => {
    axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, iptValue);
    // 새로고침해서 서버에서 데이터를 받아온것처럼 상태를 동기화시켜줌
    // state 추가 시 db에는 자동으로 id가 입력이 되지만 state는 id값을 알 수 없기 때문에
    // 다시 db를 읽어주는 방식으로 수정!
    // setTodos(...todos, iptValue);
    fetchTodos();
  };

  // ! 삭제 함수
  const onDeleteBtnHandler = async (id) => {
    axios.delete(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`);
    // 새로고침해서 서버에서 데이터를 받아온것처럼 상태를 동기화시켜줌
    setTodos(todos.filter((item) => item.id !== id));
  };

  // ! 수정 함수
  // state로 관리 중이므로 인자를 따로 받지 않아도 됨
  const onUpdateBtnHandler = async () => {
    axios.patch(`${process.env.REACT_APP_SERVER_URL}/todos/${targetId}`, {
      title: editContent,
    });
    // 새로고침해서 서버에서 데이터를 받아온것처럼 상태를 동기화시켜줌
    setTodos(todos.map((item) => {
      // 형변환을 하거나, 동등 연산자가 아닌 일치 연산자 사용
      if (item.id == targetId) {
        return {...item, title: editContent};
      } else {
        return item;
      }
    }));
  };

  // 생성한 함수를 컴포넌트가 mount 됐을 떄 실행하기 위해 useEffect를 사용
  useEffect(() => {
    // effect 구문에 생성한 함수를 넣어 실행
    fetchTodos();
  }, [])
  

  return (
    <div>
      {/* Edit area */}
      <div>
        <input
          type="text"
          placeholder="수정할 아이디"
          value={targetId}
          onChange={(e) => setTargetId(e.target.value)}
        />
        <input 
          type="text"
          placeholder="수정할 내용"
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
        />
        <button onClick={onUpdateBtnHandler}>수정</button>
      </div>
      <br />
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
      <br />
      {/* data area */}
      <div>
      {
        todos?.map((item) => {
          return (
            <div key={item.id}>
              {item.id} : {item.title}
              &nbsp;<button onClick={() => onDeleteBtnHandler(item.id)}>삭제</button>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default App