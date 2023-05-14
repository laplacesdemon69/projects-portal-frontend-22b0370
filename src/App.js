import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap'
import {
  BrowserRouter,  
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Project } from './components/Project';
import { Loginn } from './components/Loginn';
import {Home} from './components/Home';


function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    
    <div>
      <header className="navthing"><BrowserRouter>
    <div>

      <Navbar bg="dark" variant='dark' expand="lg">
        <Container fluid='md'>
          <Navbar.Brand href="#">Project-Portal-Frontend</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/Project">Projects-Teams</Nav.Link>
              <Nav.Link as={Link} to="/Login">Login</Nav.Link>
              

             
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search Projects"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

    <div>
      <Routes>

      <Route path="/Project" element={<Project/>}/>
      <Route path="/Loginn" element={<Loginn/>}/>
      <Route path="/" element={<Home/>}/>

      </Routes>

    </div>

    </BrowserRouter></header>
      <main className="App">{
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }</main>
    </div>
  );
}

export default App;