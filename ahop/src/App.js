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



function App() {


  return (
    // Navbar

    <div className="App">



      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="logo">NBNST</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Link to="/">홈</Link>
          <Link to="/list">리스트</Link>
          <Link to="/detail">디테일</Link>
        </Container>
      </Navbar>
      <br />



      <div className='main-bg' style={{backgroundImage: 'url(' + bg + ')' }}></div> 

      <Routes>
        <Route path="/" element={<div>메인</div>} />
        <Route path="/list" element={<ProductList/>} />
        <Route path="/about" element={<div>어바웃</div>} />
        <Route path="/detail" element={<ProductDetail/>}></Route>
      </Routes>


     
    </div>
  );
}

export default App;
