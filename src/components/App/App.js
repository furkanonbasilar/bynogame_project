import React, { Component } from "react";
import "./App.scss";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import MediaQuery from "react-responsive";
import ListCards from "components/ListCards/ListCards";
import SlideCards from "components/ListCards/SlideCards";
import MobileHeader from "components/MobileHeader/MobileHeader";
import MobileFooter from "components/Footer/MobileFooter";

export default class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <section>
          <MediaQuery maxWidth="767px">
            {isMobile => (isMobile ? <SlideCards /> : <ListCards />)}
          </MediaQuery>
        </section>
        <MediaQuery maxWidth="767px">
          <MobileHeader />
        </MediaQuery>
        <MediaQuery maxWidth="767px">
          {isMobile => (isMobile ? <MobileFooter /> : <Footer />)}
        </MediaQuery>
      </div>
    );
  }
}
