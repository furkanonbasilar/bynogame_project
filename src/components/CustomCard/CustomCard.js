import React from "react";
import "./CustomCard.scss";
import { Card } from "react-bootstrap";

const CustomCard = ({ data }) => {
  return (
    <Card>
      <Card.Img variant="top" src={data.download_url} />
      <Card.Title>{data.author}</Card.Title>
    </Card>
  );
};

export default CustomCard;
