import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import "./SingleP.css";
import { useParams } from "react-router-dom";

const SingleP = () => {
  const [value, setValue] = React.useState(4);
  const [singleData, settSingalData] = useState({});

  const params = useParams();

  const getProductD = async () => {
    const fetchD = await fetch(`/addproduct/${params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const sData = await fetchD.json();
    settSingalData(sData);
  };

  useEffect(() => {
    getProductD();
  });

  const addToCart = (image, title, price) => {
    console.log({ img: image, info: title, rate: price });
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
            ${singleData.price}.00/<sup className="super-tag">per product</sup>
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
            <button id="minus_btn">-</button>
            <button id="count_btn">1</button>
            <button id="plus_btn">+</button>
          </div>
          <div className="add-tocart-and-buy-now-btns">
            <button id="buy-now_btn">BUY NOW</button>
            <button
              id="add-tocartBtns"
              onClick={() => {
                addToCart(
                  singleData.selectedImage,
                  singleData.title,
                  singleData.price
                );
              }}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleP;
