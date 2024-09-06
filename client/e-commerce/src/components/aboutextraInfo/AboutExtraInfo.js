import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import "./AboutExtraInfo.css";

const AboutExtraInfo = () => {
  const [counterText, setConterText] = useState(0);

  let txt = [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptate soluta, distinctio facere numquam at obcaecati perspiciatis, in vero, cumque error. Explicabo accusantium, deserunt inventore illum at quia ea praesentium fugiat, assumenda laudantium expedita",
    },
    {
      text: "Dolor sit amet consectetur adipisicing elit. Minima voluptate soluta, distinctio facere numquam at obcaecati perspiciatis, in vero, cumque error. Explicabo accusantium, deserunt inventore illum at quia ea praesentium fugiat, assumenda laudantium expedita hic autem ",
    },
    {
      text: "Distinctio facere numquam at obcaecati perspiciatis, in vero, cumque error. Explicabo accusantium, deserunt inventore illum at quia ea praesentium fugiat, assumenda laudantium expedita hic autem totam iure architecto aperiam adipisci illo excepturi suscipit officiis",
    },
  ];

  const less = () => {
    setConterText(counterText - 1);
    if (counterText == 0) {
      setConterText(2);
    }
  };
  const greater = () => {
    setConterText(counterText + 1);
    if (counterText > 1) {
      setConterText(0);
    }
  };

  return (
    <div className="extra-info-container">
      <div className="double-icons">
        <DoubleArrowIcon sx={{ fontSize: "30px" }} />
        <DoubleArrowIcon sx={{ fontSize: "30px" }} />
      </div>
      <div className="extra-info">
        <ArrowBackIosIcon
          sx={{ fontSize: "34px", cursor: "pointer" }}
          onClick={less}
        />
        <p>{txt[counterText].text}</p>
        <ArrowForwardIosIcon
          sx={{ fontSize: "34px", cursor: "pointer" }}
          onClick={greater}
        />
      </div>
    </div>
  );
};

export default AboutExtraInfo;
