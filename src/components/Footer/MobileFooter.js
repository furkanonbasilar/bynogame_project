import React from "react";
import "./MobileFooter.scss";
import FooterItems from "../../utils/data/Footer.json";
import { Row, Col, NavDropdown } from "react-bootstrap";

const MobileFooter = () => {
  const renderCols = () => {
    return FooterItems.map(item => (
      <Col xl={3}>
        <NavDropdown
          active
          id="collasible-nav-dropdown"
          className="mobile-dropdown"
          title={item.title}
        >
          <div className="link-column">
            {item.column.map(column => (
              <a>{column}</a>
            ))}
          </div>
        </NavDropdown>
      </Col>
    ));
  };
  return (
    <footer>
      <Row className="mobile-row">{renderCols()}</Row>
    </footer>
  );
};

export default MobileFooter;
