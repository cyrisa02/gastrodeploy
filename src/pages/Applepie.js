import React from "react";
import ButtonsBottom from "../components/ButtonsBottom";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Mouse from "../components/Mouse";
// import { motion } from "framer-motion";

const Applepie = () => {
  let left = Math.floor(Math.random() * 200 + 700) + "px";
  let top = Math.floor(Math.random() * 200 + 150) + "px";
  let transform = "scale(" + (Math.random() + 0.7) + ")";

  // const variants = {
  //   initial: {
  //     opacity: 0,
  //     transition: { duration: 0.5 },
  //     x: 200,
  //   },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //   },
  //   exit: {
  //     opacity: 0.4,
  //     transition: { duration: 0.35 },
  //     x: -800,
  //   }
  // }

  return (
    <main>
      <Navigation />

      <Logo />
      <Mouse />
      <div className="container">
        <div className="laCarte">
          <div className="carte">
            <div className="divImg"></div>
            <div className="titre">Tartes aux pommes</div>
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
            <div className="divImg2"></div>
            <div className="btnSection">
              <a href="#">La recette</a>
            </div>
            <ButtonsBottom left={"/"} right={"/strawberrypie"} />
          </div>
        </div>
        <span className="random-circle" style={{ left, top, transform }}></span>
      </div>
    </main>
  );
};

export default Applepie;
