# json 관련
* 서버에 데이터 요청할 때 어떤걸 요청하면 어떤 데이터를 응답하라
-> 명세로 만든 것 (api 명세서)

* 요청 방법
-> 쿼리로 할건지 (쿼리스트링)
-> path로 할건지도 정해야 함 (경로)

<br/>

---

<br/>

# 옵셔널 체이닝

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState(null);

  // * 비동기 함수 생성
  const fetchTodos = async () => {
    // await가 없으면 마운트가 되자마자 실행되기 때문에 'pending'으로 조회된다!
    const { data } = await axios.get('http://localhost:4000/todos');
    setTodos(data);
  };

  useEffect(() => {
    // db로부터 값을 가져온다.
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
```

* 비동기 통신이 끝나기 전에 todos.map이 실행된다면 todos의 값이 null일 수 있음
* 따라서 옵셔널 체이닝을 이용!
* [코딩애플 옵셔널체이닝](https://youtu.be/WHUvtiKy_pg)