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
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  let [shoes] = useState(data);

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
        </Container>
      </Navbar>
      <br />

      <div className='main-bg' style={{backgroundImage: 'url(' + bg + ')' }}></div> 

      <Routes>
        <Route path="/" element={<div>메인</div>} />
        <Route path="/detail" element={
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

        } />
        <Route path="/about" element={<div>어바웃</div>} />
      </Routes>


     
    </div>
  );
}

export default App;
