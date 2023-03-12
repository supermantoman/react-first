import React from 'react';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import data from '../data';


export default function ListItem(props){


  return (      
      <Col xs>
        <img src={'https://codingapple1.github.io/shop/shoes' + props.index + '.jpg'} width="80%" alt="" />  
        <h4>{props.캬.title}</h4>
        <p>{props.캬.price}</p>
      </Col>
    )
}