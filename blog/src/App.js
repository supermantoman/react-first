import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Modal } from './components/Modal';

function App() {

  let post = "강남 우동 맛집";
  let [title, b] = useState(['동해물과', '백두산이', '마르고닳도록']);
  let [따봉, 따봉바꾸기] = useState([0,0,0]);
  let [modal, setModal] = useState(false);


  return (
    <div className="App">
      <div className="black-nav">
        <div>LOGO</div>
      </div>
      {/* <div className="list">
        <h4>{title[0]} <span onClick={() => { 따봉바꾸기(따봉+1)}}>👍</span> {따봉} </h4>
        <p>{title[2]}</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{setModal(!modal)}}>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {/* 반복되는 html 동시에 map함수로 원하는 갯수만큼 뿌려주기 */}
      {
        title.map(function (a, i){
          return (
            <div className="list" key={i}>
            <h4 onClick={()=>{setModal(!modal)}}> {title[i]} </h4>
            <p>2월 17일 발행</p>
            </div>
          )
        })
      }

    {
      modal == true ? <Modal/> : null
    }

    </div>
  );
}



export default App;
