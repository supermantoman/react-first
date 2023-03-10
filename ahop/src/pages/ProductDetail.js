import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

let YellowBtn = styled.button`
  background : ${props => props.bg };
  color : ${props => props.fontColor};
  padding : 10px;
  font-weight: bold;
`

let Box = styled.div`
  background : grey;
  padding: 20px;
`

function ProductDetail(props){
  
  let {id} = useParams();
  let 찾은상품 = props.shoes.find(function(x){
    return x.id == id
  });

  return(
    <>
    <div className="container">
      <Box>
        <YellowBtn fontColor='#fff' bg='blue'>버튼</YellowBtn>
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