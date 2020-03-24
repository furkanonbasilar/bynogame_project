import React, { useEffect } from "react";
import CustomCard from "components/CustomCard/CustomCard";
import "./ListCards.scss";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { getCards } from "redux/cards/action";

const ListCards = ({ cards, getCards }) => {
  useEffect(() => {
    getCards();
  }, []);

  const renderCards = () => {
    return cards.map((data, index) => (
      <Col key={index.toString()} xl={4}>
        <CustomCard data={data} />
      </Col>
    ));
  };

  return <Row className="list-cards">{renderCards()}</Row>;
};

const mapStateToProps = state => {
  return {
    cards: state.cards.cards
  };
};

const mapDispatchToProps = {
  getCards
};

export default connect(mapStateToProps, mapDispatchToProps)(ListCards);
