import React from 'react';
import ButtonsBottom from "../components/ButtonsBottom";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";

const Isopicture = () => {
    let left = Math.floor(Math.random() * 200 + 700) + "px";
    let top = Math.floor(Math.random() * 200 + 150) + "px";
    let transform = "scale(" + (Math.random() + 0.7) + ")";

    return (
      <main>
        {/* <Navigation /> */}

        <Mouse />
        <div className="main">
          <ul className="uls2">
            <li className="lis2">E</li>
            <li className="lis2">X</li>
            <li className="lis2">P</li>
            <li className="lis2">E</li>
            <li className="lis2">R</li>
            <li className="lis2">I</li>
            <li className="lis2">E</li>
            <li className="lis2">N</li>
            <li className="lis2">C</li>
            <li className="lis2">E</li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            obcaecati sapiente odio laborum quasi repudiandae odit et id velit
            aspernatur.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Culpa obcaecati sapiente odio laborum quasi repudiandae odit et id
            velit aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Culpa obcaecati sapiente odio laborum quasi repudiandae odit
            et id velit aspernatur.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Culpa obcaecati sapiente odio laborum quasi
            repudiandae odit et id velit aspernatur.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Culpa obcaecati sapiente odio laborum
            quasi repudiandae odit et id velit aspernatur.Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Culpa obcaecati sapiente odio
            laborum quasi repudiandae odit et id velit aspernatur. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Culpa obcaecati
            sapiente odio laborum quasi repudiandae odit et id velit
            aspernatur.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Culpa obcaecati sapiente odio laborum quasi repudiandae odit et id
            velit aspernatur.
          </p>
          <h1 className="gastro">Gastronome.fr</h1>
          <a href="./" className="lien">
            Découvrir...
          </a>
          <div className="block b1">
            <img src="./image/citron.jpeg" alt="citron" />
          </div>

          <div className="block b2">
            <img src="./image/fraise.jpeg" alt="fraise" />
          </div>

          <div className="block b3">
            <img src="./image/pomme.jpg" alt="pomme" />
          </div>

          <ButtonsBottom left={"/lemonpie"} right={"/pricingtable"} />
        </div>
      </main>
    );
};

export default Isopicture;