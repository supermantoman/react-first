import React from 'react';
import Row from 'react-bootstrap/Row';
import data from '../data';
import ListItem from '../components/ListItem';
import { useState } from 'react';
import axios from 'axios';

function ProductList(){
  
  const [shoes, setShoes] = useState(data);
  const [currentPage, setCurrentPage] = useState(2);

  let handleLoadMore = ()=>{
    axios.get(`https://codingapple1.github.io/shop/data${currentPage}.json`)
    .then((res)=>{

      let copy = [...shoes, ...res.data]
      setShoes(copy)
      setCurrentPage(currentPage => currentPage + 1);
    })
    .catch(()=>{
      console.log('실패함 ㅅㄱ');
    })}

  
  return(
    <>
      <Row>
        {
          shoes.map((a,index)=>{
            return(
              <ListItem index={index+1} 캬={shoes[index]}  />
            )
          })
        }
      </Row>

      <button onClick={handleLoadMore}>버튼</button>
    </>
  )
  
}

export default ProductList;