import React from "react";
import AboutHeader from "../../components/aboutheader/AboutHeader";
import HeroSection from "../../components/herosection/HeroSection";
import AboutHeroSection from "../../components/aboutherosection/AboutHeroSection";
import AboutExtraInfo from "../../components/aboutextraInfo/AboutExtraInfo";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutHeader />
      <HeroSection />
      <AboutHeroSection />
      <AboutExtraInfo />
      <Footer />
    </>
  );
};

export default About;
