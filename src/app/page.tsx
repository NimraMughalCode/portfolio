import React, { useEffect } from "react";
import SocketComponent from "./Components/SocketComponents";
import MainFile from "./PORTcomponents/MainFile";
import Header from "./PORTcomponents/Header";
import Hero from "./PORTcomponents/Hero";
import AboutMe from "./PORTcomponents/AboutMe";
import Skills from "./PORTcomponents/Skills";
import Projects from "./PORTcomponents/Projects";
import Integrations from "./PORTcomponents/Integrations";
import Contact from "./PORTcomponents/Contact";
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
