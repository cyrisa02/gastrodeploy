import React from "react";
import Navigation from "../components/Navigation";
import ButtonsBottom from "../components/ButtonsBottom";
import Logo from "../components/Logo";
import Recipe from "../components/Recipe";
import Mouse from "../components/Mouse";

export const Applepie = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
    
        <Logo />
        <Recipe projectNumber={0} />
        <ButtonsBottom left={"/"} right={"/strawberrypie"} />
      </div>
    </main>
  );
};

export const Strawberrypie = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
    
        <Logo />
        <Recipe projectNumber={1} />
        <ButtonsBottom left={"/applepie"} right={"/lemonpie"} />
      </div>
    </main>
  );
};

export const Lemonpie = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
    
        <Logo />
        <Recipe projectNumber={2} />
        <ButtonsBottom left={"/strawberrypie"} right={"/contact"} />
      </div>
    </main>
  );
};


