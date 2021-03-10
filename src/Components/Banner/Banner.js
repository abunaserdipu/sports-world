import React from "react";
import "./banner.css";
import bannerImage from "../../banner.jpg";

const Banner = () => {
  return (
    <div >
      <div className="banner-image" style={{backgroundImage: `url(${bannerImage})`}}>
      <div className="banner-text">
        <h3>Sports World</h3>
      </div>
      </div>
      
    </div>
  );
};

export default Banner;
