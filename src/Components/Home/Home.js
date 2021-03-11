import React, { useEffect, useState } from "react";
import League from "../League/League";
import bannerImage from "../../banner.jpg";

const Home = () => {
  const [leagues, setLeagues] = useState([]);
  useEffect(() => {
    const url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setLeagues(data.leagues));
  }, []);
  return (
    <div>
      <div style={{ position: "relative" }}>
        <img
          style={{
            width: "100%",
            height: "200px",
            backgroundSize: "cover",
          }}
          src={bannerImage}
          alt=""
        />
        <div
          style={{
            position: "absolute",
            left: "0",
            top: "0",
            right: "0",
            bottom: "0",
            margin: "auto",
            width: "max-content",
            height: "max-content",
            color: "white",
            fontFamily: "Monospace",
          }}
        >
          <h2>Sports World</h2>
        </div>
      </div>
      <div className="container">
        <div className="my-3">
          <div className="row">
            {leagues.map((league) => (
              <League key={league.idLeague} league={league}></League>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
