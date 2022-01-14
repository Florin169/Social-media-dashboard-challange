import React from "react";

const StatsCard = ({
  username,
  followernr,
  followers,
  today,
  darkMode,
  social,
  arrow,
}) => {
  return (
    <div className={`${darkMode ? "card" : "card-dark"}`}>
      <div className="username">
        <p className="icon">{social}</p>
        <p className={`${darkMode ? "user" : "user-dark"}`}>{username}</p>
      </div>
      <div className="followersnr">
        <p className={`${darkMode ? "fnumber" : "fnumber-dark"}`}>
          {followernr}
        </p>
        <h3 className={`${darkMode ? "follow" : "follow-dark"}`}>
          {followers}
        </h3>
      </div>
      <div className="followers-today">
        <p className="today-icon">{arrow}</p>
        <p>{today} today</p>
      </div>
    </div>
  );
};

export default StatsCard;
