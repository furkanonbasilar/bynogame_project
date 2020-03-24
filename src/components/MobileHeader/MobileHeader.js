import React from "react";
import "./MobileHeader.scss";
import { Nav } from "react-bootstrap";

const MobileHeader = () => {
  return (
    <Nav className="mobile-header">
      <Nav.Link>
        <i className="fas fa-home"></i>
      </Nav.Link>
      <Nav.Link>
        <i className="fas fa-envelope"></i>
      </Nav.Link>
      <Nav.Link>
        <i className="fab fa-twitch"></i>
      </Nav.Link>
    </Nav>
  );
};

export default MobileHeader;
