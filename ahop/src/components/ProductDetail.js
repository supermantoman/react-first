import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from '../data';
import ListItem from '../components/ListItem';
import { useState } from 'react';

function ProductDetail(){
  
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

export default ProductDetail;