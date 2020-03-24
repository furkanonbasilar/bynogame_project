import React, { useEffect } from "react";
import CustomCard from "components/CustomCard/CustomCard";
import { Carousel } from "react-bootstrap";
import { connect } from "react-redux";
import "./SlideCards.scss";
import { getCards } from "redux/cards/action";

const SlideCards = ({ cards, getCards }) => {
  useEffect(() => {
    getCards();
  }, []);

  const renderCards = () => {
    return cards.map(data => (
      <Carousel.Item>
        <CustomCard data={data} />
      </Carousel.Item>
    ));
  };

  return <Carousel>{renderCards()}</Carousel>;
};

const mapStateToProps = state => {
  return {
    cards: state.cards.cards
  };
};

const mapDispatchToProps = {
  getCards
};

export default connect(mapStateToProps, mapDispatchToProps)(SlideCards);
