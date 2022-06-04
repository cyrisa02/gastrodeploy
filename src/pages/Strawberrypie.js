import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ButtonsBottom from "../components/ButtonsBottom";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";

const Strawberrypie = () => {
  return (
    <main>
      <Mouse />
      <Navigation />
      <Logo />
      <div className="container">
        <div className="laCarte">
          <div className="carte">
            <div className="divImgf"></div>
            <div className="titre">Tartes aux fraises</div>

            <div className="tab min">
              <div>
                <FontAwesomeIcon icon="hourglass" />
              </div>
              <span>20</span>
            </div>
            <div className="tab ing">
              <FontAwesomeIcon icon="list" />
              <span>8</span>
            </div>
            <div className="tab pers">
              <FontAwesomeIcon icon="user" />
              <span>4</span>
            </div>
            <div className="info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              obcaecati sapiente odio laborum quasi repudiandae odit et id velit
              aspernatur.
            </div>
          </div>
          <div className="derriere">
            <div className="divImg2f"></div>
            <div className="btnSection">
              <a href="#">La recette</a>
            </div>
            <ButtonsBottom left={"/applepie"} right={"/lemonpie"} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Strawberrypie;
