import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import Admin from "./admin/Admin";
import SingleProduct from "./pages/single/SingleProduct";
import AllP from "./pages/allP/AllP";
import PrivateRoute from "./components/PrivateRoute";
import AddressForm from "./components/Address/AddressForm";
import PaymentPage from "./pages/payment/PaymentPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/allproduct/:id" element={<AllP />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/address" element={<AddressForm />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
