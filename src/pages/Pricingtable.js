import React from 'react';
import ButtonsBottom from "../components/ButtonsBottom";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";

const Pricingtable = () => {
    return (
      <main>
        <Navigation />

        <Logo />
        <Mouse />
        <div className="flexContainer">
          <div className="threeCards">
            <div className="header">
              <h2>
                <span className="spanPrix">9.99€</span>/ tarte
              </h2>
              <div className="price">
                <h1>Tarte aux Pommes</h1>
              </div>
            </div>
            <div className="details">sans sucre</div>
            <div className="details">avec la livraison</div>
            <div className="details">4 parts</div>
            <div className="details">6 parts</div>
            <div className="btn">
              <a href="#">Commander</a>
            </div>
          </div>

          <div className="threeCards">
            <div className="header">
              <h2>
                <span className="spanPrix">8.99€</span>/ tarte
              </h2>
              <div className="price">
                <h1>Tarte aux Fraises</h1>
              </div>
            </div>
            <div className="details">sans sucre</div>
            <div className="details">avec la livraison</div>
            <div className="details">4 parts</div>
            <div className="details">6 parts</div>
            <div className="btn">
              <a href="#">Commander</a>
            </div>
          </div>

          <div className="threeCards">
            <div className="header">
              <h2>
                <span className="spanPrix">7.99€</span>/ tarte
              </h2>
              <div className="price">
                <h1>Tarte aux Citrons</h1>
              </div>
            </div>
            <div className="details">sans sucre</div>
            <div className="details">avec la livraison</div>
            <div className="details">4 parts</div>
            <div className="details">6 parts</div>
            <div className="btn">
              <a href="#">Commander</a>
            </div>
          </div>
          <ButtonsBottom left={"/isopicture"} right={"/contact"} />
        </div>
      </main>
    );
};

export default Pricingtable;