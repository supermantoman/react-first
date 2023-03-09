import React from 'react';
import Row from 'react-bootstrap/Row';
import data from '../data';
import ListItem from '../components/ListItem';
import { useState } from 'react';

function ProductList(){
  
  let [shoes] = useState(data);
  
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
    </>
  )
}

export default ProductList;