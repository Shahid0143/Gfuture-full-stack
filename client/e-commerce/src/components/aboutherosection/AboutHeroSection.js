import React from "react";
import "./AboutHeroSection.css";

const AboutHeroSection = () => {
  return (
    <div className="about-hero-sec-container">
      <div className="about-hero-sec">
        <div className="about-hero-img">
          <img
            src="https://cdn.pixabay.com/photo/2015/12/21/22/10/laptop-1103330_1280.jpg"
            alt=""
          />
        </div>
        <div className="about-hero-txt">
          <h1>ABOUT US CONTENT</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            veritatis ex laudantium rem odit debitis repellat totam minus
            officiis delectus consequatur facilis, qui mollitia nesciunt animi
            dolorem natus esse culpa sapiente, dicta numquam eum quae itaque.
            Excepturi delectus porro consequatur ipsam beatae in adipisci enim,
            libero amet autem vitae dolor!
          </p>
          <button>VIEW MORE</button>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
