import { useState } from "react";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav} from 'react-bootstrap';
import bg from './img/bgImage3.jpg';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data.js';
import ListItem from './components/ListItem';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import axios from 'axios';



function App() {

  let navigate= useNavigate();
  let [shoes] = useState(data);

  return (
    // Navbar

    <div className="App">

      {/* 헤더 */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="logo">NBNST</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/list')}}>List</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Pricing</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/event')}}>이벤트</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />


      <div className='main-bg' style={{backgroundImage: 'url(' + bg + ')' }}></div> 

      <Routes>
        <Route path="/" element={<div>메인</div>} />
        <Route path="/list" element={<ProductList/>} />
        <Route path="/about" element={<div>어바웃</div>} />
        <Route path="/detail/:id" element={<ProductDetail index={shoes.index} shoes={shoes} />} />

        <Route path="/event" element={<Event/>}>
          <Route path="one" element={<div>ONE창</div>}></Route>
          <Route path="two" element={<div>TWO창</div>}></Route>
        </Route>

      </Routes>


     
    </div>
  );
}

function Event(){
  return (
    <div>
      <div>오늘이벤트</div>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
