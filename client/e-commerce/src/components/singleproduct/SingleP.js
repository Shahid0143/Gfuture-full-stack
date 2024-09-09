import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../../CartContext";
import "react-toastify/dist/ReactToastify.css";
import "./SingleP.css";

const SingleP = () => {
  const [value, setValue] = React.useState(4);
  const [singleData, settSingalData] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { addToCart, cart } = useCart();

  const params = useParams();

  const getProductD = async () => {
    const fetchD = await fetch(
      `https://gfuture-full-stack-1.onrender.com/addproduct/${params.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const sData = await fetchD.json();
    settSingalData(sData);
  };

  useEffect(() => {
    getProductD();
  }, []);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    const isAlreadyInCart = cart.some((item) => item._id === singleData._id);

    if (isAlreadyInCart) {
      toast.info("Item is already in the cart!");
    } else {
      addToCart({ ...singleData, quantity });
      toast.success("Product added to cart!");
    }
  };

  return (
    <div className="main-signle-product-container">
      <div className="signle-product-container">
        <div className="single-image-product">
          <img src={singleData.selectedImage} alt="" />
        </div>
        <div className="signle-text-info-product">
          <p className="firstTitle">{singleData.title}</p>
          <p className="secondTitle">{singleData.title}</p>
          <Rating name="read-only" id="rating-star" value={value} readOnly />
          <p className="priceparagraph">
            ${singleData.price * quantity}.00/
            <sup className="super-tag">per product</sup>
          </p>
          <p className="desc-paragraph">
            {singleData.description} Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Labore saepe similique consequatur aspernatur
            rerum sed dolorem sunt architecto pariatur placeat repellendus neque
            ipsum provident omnis odit itaque, sit, totam iusto ullam animi
            dignissimos eum. Porro dolore quod amet provident quibusdam.
          </p>
          <div className="quantity-div">
            <p>Quantity : </p>
            <button id="minus_btn" onClick={handleDecrease}>
              -
            </button>
            <button id="count_btn">{quantity}</button>
            <button id="plus_btn" onClick={handleIncrease}>
              +
            </button>
          </div>
          <div className="add-tocart-and-buy-now-btns">
            <button id="buy-now_btn">BUY NOW</button>
            <button id="add-tocartBtns" onClick={handleAddToCart}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleP;
