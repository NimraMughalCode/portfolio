import React from "react";
import Header from "./PORTcomponents/Header";
import Hero from "./PORTcomponents/Hero";
import AboutMe from "./PORTcomponents/AboutMe";
import Skills from "./PORTcomponents/Skills";
import Projects from "./PORTcomponents/Projects";
import Integrations from "./PORTcomponents/Integrations";
import ContactDetails from "./PORTcomponents/ContactDetails";
import Footer from "./PORTcomponents/Footer";

const Home = () => {
  return (
      <div>
      <Header />
      
  <Hero />

      <AboutMe />
      <Skills />
      
      <Projects />
      <Integrations />
      <ContactDetails />
      <Footer />
</div>
  );
};

export default Home;
