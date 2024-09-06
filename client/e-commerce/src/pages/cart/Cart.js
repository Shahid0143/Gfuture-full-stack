import React from "react";
import Navbar from "../../components/navbar/Navbar";
import CartSection from "../../components/cartsection/CartSection";
import CartHeader from "../../components/cartheader/CartHeader";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <CartHeader/>
      <CartSection/>
    </div>
  );
};

export default Cart;
