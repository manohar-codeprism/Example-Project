import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-deatails">
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Manohar</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Developer",
                    1000,
                    "React Developer",
                    1000,
                    "Creative Developer",
                    1000,
                  ]}
                />
              </h1>
            </span>
          </div>
          <div className="profile-options">
            <button className="button primary-button">
              Hire Me
            </button>
            <a href='/manohar.pdf' download="Manohar manohar.pdf">
              <button className="button highlighted-button">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

