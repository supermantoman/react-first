import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  let post = "강남 우동 맛집";
  let [title, b] = useState(['제목이다 호호호', '케케케', '부부부부']);
  let [따봉, 따봉바꾸기] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>블로그 이름이다~</div>
      </div>
      <div className="list">
        <h4>{title[0]} <span onClick={() => { 따봉바꾸기(따봉+1)}}>👍</span> {따봉} </h4>
        <p>{title[2]}</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </div>
   

  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
     <p>상세내용</p>
    </div>
  )
}

export default App;
