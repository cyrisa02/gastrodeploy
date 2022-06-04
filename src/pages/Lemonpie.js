import React from "react";
import ButtonsBottom from "../components/ButtonsBottom";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Mouse from "../components/Mouse";

const Strawberrypie = () => {
  return (
    <main>
      <Navigation />
      <Logo />
      <Mouse />
      <div className="container">
        <div className="laCarte">
          <div className="carte">
            <div className="divImgc"></div>
            <div className="titre">Tartes aux citrons</div>
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
            <div className="divImg2c"></div>
            <div className="btnSection">
              <a href="#">La recette</a>
            </div>
            <ButtonsBottom left={"/strawberrypie"} right={"/isopicture"} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Strawberrypie;
