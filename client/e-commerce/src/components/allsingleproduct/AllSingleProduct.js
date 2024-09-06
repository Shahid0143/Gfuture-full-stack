import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import "./AllSingleProduct.css";
import { useParams } from "react-router-dom";

const AllSingleProducts = () => {
  const [value, setValue] = React.useState(4);
  const [allsingleData, settallSingalData] = useState({});

  const params = useParams();

  const getallProductD = async () => {
    const fetchallD = await fetch(`/addallproduct/${params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const sallData = await fetchallD.json();
    settallSingalData(sallData);
  };

  useEffect(() => {
    getallProductD();
  });

  return (
    <div className="all-main-signle-product-container">
      <div className="all-signle-product-container">
        <div className="all-single-image-product">
          <img src={allsingleData.AllSelectedImage} alt="" />
        </div>
        <div className="all-signle-text-info-product">
          <p className="all-firstTitle">{allsingleData.allTitle}</p>
          <p className="all-secondTitle">{allsingleData.allTitle}</p>
          <Rating name="read-only" id="rating-star" value={value} readOnly />
          <p className="all-priceparagraph">
            ${allsingleData.allPrice}.00/
            <sup className="super-tag">per product</sup>
          </p>
          <p className="all-desc-paragraph">
            {allsingleData.allDescription} Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Labore saepe similique consequatur
            aspernatur rerum sed dolorem sunt architecto pariatur placeat
            repellendus neque ipsum provident omnis odit itaque, sit, totam
            iusto ullam animi dignissimos eum. Porro dolore quod amet provident
            quibusdam.
          </p>
          <div className="all-quantity-div">
            <p>Quantity : </p>
            <button id="all-minus_btn">-</button>
            <button id="all-count_btn">1</button>
            <button id="all-plus_btn">+</button>
          </div>
          <div className="all-add-tocart-and-buy-now-btns">
            <button id="all-buy-now_btn">BUY NOW</button>
            <button id="all-add-tocartBtns">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSingleProducts;
