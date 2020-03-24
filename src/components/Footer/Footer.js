import React from "react";
import { Row, Col } from "react-bootstrap";
import FooterItems from "../../utils/data/Footer.json";
import "./Footer.scss";

const Footer = () => {
  const renderCols = () => {
    return FooterItems.map((item, index) => (
      <Col xl={3} key={index.toString()}>
        <h3>{item.title}</h3>
        <ul>
          {item.column.map((column, index) => (
            <li key={index.toString()}>{column}</li>
          ))}
        </ul>
      </Col>
    ));
  };
  return (
    <footer>
      <Row className="footer-row">{renderCols()}</Row>
    </footer>
  );
};

export default Footer;
