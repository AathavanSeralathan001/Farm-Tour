import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Navbar1() {
  

  return (
    <Navbar bg="light" expand="lg">
      <Container>
      
    

        <Navbar.Brand href="#home">Farm Tour</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          
            <Nav.Link href='/registration-form'>Register Land</Nav.Link>
            <Nav.Link href='/create-slot'>Create Slots</Nav.Link>
            <Nav.Link href='/slots-display'>View Slots</Nav.Link>
            <Nav.Link href='/display'>Display Farms</Nav.Link>
            <NavDropdown title="User Actions" id="basic-nav-dropdown">
              <NavDropdown.Item href="/update-profile">Update Profile</NavDropdown.Item>
              <NavDropdown.Item href="/mapbox">Mapbox</NavDropdown.Item>
              <NavDropdown.Item href="/forgot-password">
                Reset Password
              </NavDropdown.Item>
             
              <NavDropdown.Divider />
              <NavDropdown.Item href="/logout">
               Logout
              </NavDropdown.Item>
            </NavDropdown>
            
            {/* <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="#login"><strong>Email:</strong>{currentUser.email}</a>
          </Navbar.Text>
            </Navbar.Collapse> */}
            {/* <strong>Email:</strong>{currentUser.email} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;