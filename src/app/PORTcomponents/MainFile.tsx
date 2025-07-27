import Header from "./Header";
import Hero from "./Hero";
import MyProjects from "./MyProjects";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Integrations from "./Integrations";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import ContactDetails from "./ContactDetails";
import Footer from "./Footer";
import AnimatedSection from "../Components/AnimatedSection";

const MainFile = () => {
    return (
        <>
            <Header />
            <main>
                <AnimatedSection direction="up"><Hero /></AnimatedSection>
                <AnimatedSection direction="left" delay={0.1}><MyProjects /></AnimatedSection>
                <AnimatedSection direction="right" delay={0.2}><AboutMe /></AnimatedSection>
                <AnimatedSection direction="up" delay={0.3}><Skills /></AnimatedSection>
                <AnimatedSection direction="left" delay={0.4}><Projects /></AnimatedSection>
                <AnimatedSection direction="right" delay={0.5}><Integrations /></AnimatedSection>
                <AnimatedSection direction="up" delay={0.6}><Testimonials /></AnimatedSection>
                <AnimatedSection direction="left" delay={0.7}><Contact /></AnimatedSection>
                <AnimatedSection direction="right" delay={0.8}><ContactDetails /></AnimatedSection>
            </main>
            <Footer />
        </>
    )
}

export default MainFile;