import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        paddingLeft: 20,
        paddingRigth: 20,
      }}
    >
      <div>
        <h1>Throttling&Debouncing 예제</h1>
        <button onClick={() => navigate('/tnd')}>
          페이지 이동
        </button>
      </div>

      <br/>

      <div>
        <h1>Lodash 예제</h1>
        <button onClick={() => navigate('/lodash')}>
          페이지 이동
        </button>
      </div>
    </div>
  )
}

export default Home