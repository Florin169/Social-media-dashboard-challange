import React from "react";
import { useState } from "react";
import Overview from "./Overview";
import StatsCard from "./StatsCard";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaSortDown,
  FaSortUp,
  FaCircle,
} from "react-icons/fa";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? "main" : "main-dark"}`}>
      <div className="title">
        <h1 className={`${darkMode ? "title1" : "title1-dark"}`}>
          Social Media Dashboard
        </h1>
        <p>Total Followers: 23,004</p>
      </div>
      <div className="dark-mode">
        <h2>Dark Mode</h2>
        <div className="switch">
          <button className="switch-btn" onClick={() => setDarkMode(!darkMode)}>
            <FaCircle className={`${darkMode ? "circle" : "circle-dark"}`} />
          </button>
        </div>
      </div>
      <div className="stats">
        <StatsCard
          username={"@nathanf"}
          followernr={1987}
          followers={"FOLLOWERS"}
          today={12}
          social={<FaFacebookF />}
          arrow={<FaSortUp />}
          darkMode={darkMode}
        />
        <StatsCard
          username={"@nathanf"}
          followernr={1044}
          followers={"FOLLOWERS"}
          today={99}
          social={<FaTwitter />}
          arrow={<FaSortUp />}
          darkMode={darkMode}
        />
        <StatsCard
          username={"@realnathanf"}
          followernr={"11k"}
          followers={"FOLLOWERS"}
          today={1099}
          social={<FaInstagram />}
          arrow={<FaSortUp />}
          darkMode={darkMode}
        />
        <StatsCard
          username={"Nathan F."}
          followernr={8239}
          followers={"SUBSCRIBERS"}
          today={144}
          social={<FaYoutube />}
          arrow={<FaSortDown />}
          darkMode={darkMode}
        />
      </div>
      <h1 className={`${darkMode ? "overview-title" : "overview-titleDark"}`}>
        Overview - Today
      </h1>
      <div className="overview-cards">
        <Overview
          views={"Page Views"}
          nr={87}
          percentage={"3%"}
          social={<FaFacebookF />}
          arrow={<FaSortUp />}
          darkMode={darkMode}
        />

        <Overview
          views={"Likes"}
          nr={52}
          percentage={"2%"}
          social={<FaFacebookF />}
          arrow={<FaSortDown />}
          darkMode={darkMode}
        />
        <Overview
          views={"Likes"}
          nr={5462}
          percentage={"2257%"}
          social={<FaTwitter />}
          arrow={<FaSortUp />}
          darkMode={darkMode}
        />
        <Overview
          views={"Profile Views"}
          nr={"52k"}
          percentage={"1375%"}
          social={<FaTwitter />}
          arrow={<FaSortUp />}
          darkMode={darkMode}
        />
        <Overview
          views={"Retweets"}
          nr={117}
          percentage={"303%"}
          social={<FaInstagram />}
          arrow={<FaSortUp />}
          darkMode={darkMode}
        />
        <Overview
          views={"Likes"}
          nr={507}
          percentage={"553%"}
          social={<FaInstagram />}
          arrow={<FaSortUp />}
          darkMode={darkMode}
        />
        <Overview
          views={"Likes"}
          nr={107}
          percentage={"19%"}
          social={<FaYoutube />}
          arrow={<FaSortDown />}
          darkMode={darkMode}
        />
        <Overview
          views={"Total Views"}
          nr={1407}
          percentage={"12%"}
          social={<FaYoutube />}
          arrow={<FaSortDown />}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
};

export default App;
