import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faFlag,
  faFutbol,
  faMapMarkerAlt,
  faMars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import male from "../../male.png";
import female from "../../female.png";
import "./languageDetail.css";

const LeagueDetail = () => {
  const { idLeague } = useParams();
  const [league, setLeague] = useState([]);

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLeague(data.leagues[0]));
  }, []);

  return (
    <div>
      <div style={{ position: "relative" }}>
        <img
          style={{ width: "100%", height: "200px", opacity: "0.1" }}
          src={league.strBanner}
          alt=""
        />
        <div style={{}}></div>
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
          }}
        >
          <img
            style={{ width: "200px", height: "100px" }}
            src={league.strLogo}
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <div
          style={{ backgroundColor: "slateBlue", color: "white" }}
          className="card my-3"
        >
          <div className="row p-3">
            <div className="col-md-8">
              <div className="card-body">
                <h5 class="card-title">{league.strLeague}</h5>
                <p>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Founded:{" "}
                  {league.intFormedYear}
                </p>
                <p>
                  <FontAwesomeIcon icon={faFlag} /> Country: {league.strCountry}
                </p>
                <p>
                  <FontAwesomeIcon icon={faFutbol} /> Sport Type:{" "}
                  {league.strSport}
                </p>
                <p>
                  <FontAwesomeIcon icon={faMars} /> Gender: {league.strGender}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              {league?.strGender?.toLowerCase() === "male" ? (
                <img style={{ width: "100%" }} src={male} />
              ) : (
                <img style={{ width: "100%" }} src={female} />
              )}
            </div>
          </div>
        </div>
        <div>
          <p style={{ lineHeight: "30px" }}>{league.strDescriptionEN}</p>
        </div>
        <div className="text-center icon">
          <a href="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.twitter.com">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.youtube.com">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeagueDetail;
