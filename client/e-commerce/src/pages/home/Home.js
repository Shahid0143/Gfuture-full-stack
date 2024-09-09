import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import TopProducts from "../../components/topproducts/TopProducts";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <TopProducts />
      <Footer />
    </>
  );
};

export default Home;
