import React from "react";
import Header from "./PORTcomponents/Header";
import Hero from "./PORTcomponents/Hero";
import Carousel from "./PORTcomponents/Carousel";
import Technologies from "./PORTcomponents/Technologies";
import FeaturedProjects from "./PORTcomponents/FeaturedProjects";
import FAQ from "./PORTcomponents/FAQ";
import Contact from "./PORTcomponents/Contact";
import Footer from "./PORTcomponents/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Carousel />
      <Technologies />
      <FeaturedProjects />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
