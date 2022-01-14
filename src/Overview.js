import React from "react";

const Overview = ({ views, nr, percentage, social, arrow, darkMode }) => {
  return (
    <div className="overview">
      <div className={`${darkMode ? "overview-card" : "overview-cardDark"}`}>
        <div className="icon">
          <h3>{views}</h3>
          <p>{social}</p>
        </div>
        <div className="overview-stats">
          <p className={`${darkMode ? "overviewNr" : "overviewNr-dark"}`}>
            {nr}
          </p>
          <div className="icon-ptg">
            <p className="arrow">{arrow}</p>
            <h4>{percentage}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
