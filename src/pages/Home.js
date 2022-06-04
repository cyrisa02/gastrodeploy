import React from "react";
import ButtonsBottom from "../components/ButtonsBottom";
import DynamicText from "../components/DynamicText";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import { motion } from "framer-motion";

const Home = () => {
  // const variants = {
  //   initial: {
  //     opacity: 0,
  //     transition: { duration: 0.5 },
  //     x: 100,
  //   },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //   },
  //   exit: {
  //     opacity: 0,
  //     transition: { duration: 0.3 },
  //     x: -100,
  //   },
  // }
  return (
    <main>
      <Mouse />
      <div className="home">
        <Navigation />
        <Logo />

        <div className="home-main">
          <div className="main-content">
            <motion.h1 drag onDragEnd>
              Gastronomie Française
            </motion.h1>

            <motion.h2 drag onDragEnd>
              <DynamicText />
            </motion.h2>
          </div>
        </div>
        <ButtonsBottom right={"/applepie"} />
      </div>
    </main>
  );
};

export default Home;
