import React from "react";
import "./banner.css";
import bannerImage from "../../banner.jpg";

const Banner = () => {
  return (
    <div className="banner-image">
      <img
          style={{
            width: "100%",
            height: "200px",
            backgroundSize: 'cover',
          }}
          src={bannerImage}
          alt=""
        />
      <div className="banner-text">
        <h2>Sports World</h2>
      </div>
    </div>
  );
};

export default Banner;
