import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

let YellowBtn = styled.button`
  background : ${props => props.bg };
  color : ${props => props.bg == 'blue'? '#999' : 'yellow'};
  padding : 10px;
  font-weight: bold;
`

let Box = styled.div`
  background : grey;
  padding: 20px;
`

function ProductDetail(props){

  const [showModal, setShowModal] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false)
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []); 

  let [count, setCount] = useState(0);
  
  let {id} = useParams();
  let 찾은상품 = props.shoes.find(function(x){
    return x.id == id
  });

  return(
    <>
    <div className="container">
      {showModal && (<div className='alert alert-warning'>
        2초만에 사면 10000원 할인
      </div>
      )}
      <button onClick={()=>{setCount(count+1)}}>버튼</button>
      <Box>
        <YellowBtn bg='green'>버튼</YellowBtn>
      </Box>
    <div className="row">
      <div className="col-md-6">
        {/* {props.shoes.map((a,index)=>{  
          return <img src={"https://codingapple1.github.io/shop/shoes" + (index+1) + ".jpg"} width="100%" />;
        })} */}
        <img src={"https://codingapple1.github.io/shop/shoes" + (parseInt(props.shoes[id].id + 1)) + ".jpg"} width="100%" />
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{찾은상품.title}</h4>
        <p>{찾은상품.content}</p>
        <p>{찾은상품.price}</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </div>
  </div> 
    </>
  )
}

export default ProductDetail;