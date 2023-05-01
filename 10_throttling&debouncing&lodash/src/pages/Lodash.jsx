import React, { useState, useCallback } from 'react';
import _ from 'lodash';

function Lodash() {
  const [searchText, setSearchText] = useState('');
  const [inputText, setInputText] = useState('');


  // * custom debounce
  const debounce = (callback, delay) => {
    let timerId = null;
    // 2. return문에 의해 아래의 함수를 반환받게 됨
    //    이 함수는 debounce 함수 내부에 들어있는 '클로저 함수'를 반환받는 것
    return (...args) => {
      // 클로저 함수는 내부에 있는 변수 이외에도 외부에 있는 timerId를 계속해서 참조하고 있다
      if(timerId) clearTimeout(timerId);
      timerId = setTimeout(() => {
        callback(...args)
      }, [delay])
    };
  };

  // * useCallback을 써야 함!
  // ? 왜 => 클로저 개념과 관련되어있음. 클로저에 대해 숙지할 것!
  const handleSearchText = useCallback(
    // _.debounce((text) => {
    // 1. debounce 함수 호출
    debounce((text) => {
      setSearchText(text)
    }, 2000),
  []);


  // * 공통 함수
  const handleChange = (e) => {
    setInputText(e.target.value);
    handleSearchText(e.target.value);
  };

  return (
    <div
      style={{
        paddingLeft: 20,
        paddingRigth: 20,
      }}
    >
      <h1>디바운싱 예제</h1>
      <input
        type="text"
        placeholder='입력값을 넣고 디바운싱 테스트를 해보세요'
        style={{ width: "300px" }}
        onChange={handleChange}
      />
      <p>Search Text : {searchText}</p>
      <p>Input Text : {inputText}</p>
    </div>
  )
}

export default Lodash