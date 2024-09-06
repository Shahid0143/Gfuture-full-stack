import React, { useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Slider.css";

const Slider = () => {
  const [count, setCount] = useState(0);

  let images = [
    { img: "https://clipground.com/images/smart-watch-png-8.png" },
    { img: "http://www.pngmart.com/files/13/Smartwatch-PNG-Image.png" },
    {
      img: "https://www.pngmart.com/files/13/Smartwatch-PNG-Free-Download.png",
    },
  ];

  const previous = () => {
    setCount(count - 1);
    if (count === 0) {
      setCount(2);
    }
  };

  const next = () => {
    setCount(count + 1);
    if (count > 1) {
      setCount(0);
    }
  };

  return (
    <>
      <div className="slider-container">
        <div className="slider">
          <div className="info-box">
            <p>
              YOUR PRODUCTS <br /> ARE GREAT
            </p>
            <button>View Products</button>
          </div>
          <div className="slider-box">
            <img src={images[count].img} alt="" />
          </div>
          <ArrowBackIosNewIcon
            sx={{
              position: "absolute",
              top: "36%",
              left: "1%",
              color: "#c6d8de",
              cursor: "pointer",
              fontSize: "75px",
            }}
            onClick={previous}
          />
          <ArrowForwardIosIcon
            sx={{
              position: "absolute",
              top: "36%",
              right: "1%",
              color: "#c6d8de",
              cursor: "pointer",
              fontSize: "75px",
            }}
            onClick={next}
          />
        </div>
      </div>
    </>
  );
};

export default Slider;
