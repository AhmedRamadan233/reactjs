import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import About from "../Components/About/About";
import Skill from "../Components/Skills/Skills";
import Portfolio from "../Components/Portfolio/Portfolio";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <About />
        <Skill />
        <Portfolio />
      </div>
      <Footer />
    </>
  );
};

export default Home;
