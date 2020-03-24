import React from "react";
import { ReactComponent as ReactLogo } from "./logo.svg";
import { Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <Navbar variant="dark">
        <Navbar.Brand href="#home">
          <ReactLogo />
        </Navbar.Brand>
        <Nav className="mr-auto first-nav">
          <Nav.Link href="#home">Item</Nav.Link>
          <Nav.Link href="#link">Steam</Nav.Link>
          <Nav.Link href="#link">Pazar</Nav.Link>
          <Nav.Link href="#link">Destekle</Nav.Link>
          <NavDropdown title="Oyunlar" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              Knight Online
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">CS:GO</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Dota 2</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <div className="search-wrapper">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        </div>
        <Nav className="mr-auto second-nav">
          <Nav.Link href="#home">
            <i className="fas fa-user"></i>
          </Nav.Link>
          <Nav.Link href="#link">
            <i className="fas fa-shopping-cart"></i>
          </Nav.Link>
          <Nav.Link href="#link">
            <i className="fas fa-money-check"></i>
          </Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
