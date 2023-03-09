import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail(props){
  
  let {id} = useParams();

  return(
    <>
    <div className="container">
    <div className="row">
      <div className="col-md-6">
        {/* {props.shoes.map((a,index)=>{  
          return <img src={"https://codingapple1.github.io/shop/shoes" + (index+1) + ".jpg"} width="100%" />;
        })} */}
        <img src={"https://codingapple1.github.io/shop/shoes" + (parseInt(props.shoes[id].id) + 1) + ".jpg"} width="100%" />
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{props.shoes[id].title}</h4>
        <p>{props.shoes[id].content}</p>
        <p>{props.shoes[id].price}</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </div>
  </div> 
    </>
  )
}

export default ProductDetail;