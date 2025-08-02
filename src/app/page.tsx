"use client";

import AnimatedSection from "./Components/AnimatedSection";
import Header from "./PORTcomponents/Header";
import Hero from "./PORTcomponents/Hero";
import Skills from "./PORTcomponents/Skills";
import Projects from "./PORTcomponents/Projects";
import Integrations from "./PORTcomponents/Integrations";
import Contact from "./PORTcomponents/Contact";
import ContactDetails from "./PORTcomponents/ContactDetails";
import Footer from "./PORTcomponents/Footer";
import Technologies from "./PORTcomponents/Technologies";
import FAQ from "./PORTcomponents/FAQ";
import Carousel from "./PORTcomponents/Carousel";
import FeaturedProjects from "./PORTcomponents/FeaturedProjects";
import { useEffect } from 'react';

export default function HomePage() {
    useEffect(() => {
    const sectionId = localStorage.getItem('scrollToSection');
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // delay to allow page rendering
      }
      localStorage.removeItem('scrollToSection');
    }
  }, []);
  return (
    <>
      
      <main>
        <AnimatedSection direction="up"><Hero /></AnimatedSection>
       <AnimatedSection direction="up" delay={0.1}><Carousel /></AnimatedSection>      
        <AnimatedSection direction="up" delay={0.1}><Technologies /></AnimatedSection>
        <AnimatedSection direction="up" delay={0.1}><Skills /></AnimatedSection>
        {/* <AnimatedSection direction="left" delay={0.1}><FeaturedProjects /></AnimatedSection> */}
        <AnimatedSection direction="left" delay={0.1}><Projects /></AnimatedSection>
        <AnimatedSection direction="right" delay={0.1}><Integrations /></AnimatedSection>
        <AnimatedSection direction="left" delay={0.1}><Contact /></AnimatedSection>
        <AnimatedSection direction="right" delay={0.1}><ContactDetails /></AnimatedSection>
        <AnimatedSection direction="right" delay={0.1}><FAQ /></AnimatedSection>
        
      </main>
      <Footer />
    </>
  );
}
