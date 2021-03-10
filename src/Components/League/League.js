import React from "react";
import { useHistory } from "react-router";

const League = (props) => {
  const { strLeague, strSport, idLeague } = props.league;
  const history = useHistory();
  const leagueDetail = (idLeague) => {
    history.push(`league/${idLeague}`);
  };
  return (
    <div className="col-md-4 my-3">
      <div className="text-center">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{strLeague}</h2>
          <h5 className="card-text">Sports type: {strSport}</h5>
          <button
            onClick={() => leagueDetail(idLeague)}
            className="btn btn-primary"
          >
            More Information
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default League;
