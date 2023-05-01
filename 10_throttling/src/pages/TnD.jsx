import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TnD() {
  const [state, setState] = useState(true);
  const navigate = useNavigate();
  
  // * timer Id
  let timerId = null;
  
  // * 쓰로틀링 버튼 클릭 후 페이지 이동을 하면 이동했음에도 이전 페이지에 남아있던
  // * 쓰로틀링 이벤트가 실행된다. => 이러한 경우를 메모리 누수라고 볼 수 있음!
  // 해결 방안으로 useEffcet 사용
  useEffect(() => {
    return () => {
      // * 언마운트될 때 동작 처리 가능
      if(timerId) {
        clearTimeout(timerId)
      }
    }
  }, []);

  const throttle = (delay) => {
    if(timerId) {
      // timerId가 있으면 바로 함수 종료
      return;
    }

    // state가 변경되면서 리렌더링됨
    // -> timerId가 무조건 null이 됨(리렌더링 했으니까)
    // -> 따라서 정상 동작하지 않음
    setState(!state);

    console.log(`API 요청 실행! ${delay}ms 동안 추가 요청은 안받아요!`);
    timerId = setTimeout(() => {
      console.log(`${delay}ms 지났으니 추가 요청 받습니다!`);
      timerId = null;
    }, delay);
  };
  
  // * 반복적인 이벤트 이후, delay가 지나면 function
  const debounce = (delay) => {
    if(timerId) {
      // 할당되어있는 timerId에 해당하는 타이머 제거
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      console.log(`마지막 요청으로부터 ${delay}ms 지났으므로 API 요청 실행!`);
      timerId = null;
    }, delay);

  };
  return (
    <div
      style={{
        paddingLeft: 20,
        paddingRigth: 20,
      }}
    >
      <h1>Button 이벤트 예제</h1>
      <button onClick={() => throttle(2000)}>Throttling Btn</button>
      <button onClick={() => debounce(2000)}>Debounce Btn</button>
      <div>
        <button onClick={() => navigate('/company')}>
          company 페이지로 이동
        </button>
      </div>
    </div>
  )
}

export default TnD