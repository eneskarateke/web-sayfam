import React from "react";
import data from "../MockData/data";
import "./CSS/Profile.css";

function Profile() {
  const { info } = data.profile;
  const { aboutMe } = data.profile;
  return (
    <div className="profileContainer">
      <h1 className="ana-baslik">Profile </h1>

      <div className="subBasliklar">
        <div className="profile-area">
          <h2 className="profile-baslik">Profile</h2>
          {/* <div className="mappedData">
            <div className="block-labels">
              {Object.entries(info).map(([key, value]) => (
                <div className="profile-item" key={key}>
                  <span className="profile-label">{value.label}</span>
                </div>
              ))}
            </div>

            <div className="block-values">
              {Object.entries(info).map(([key, value]) => (
                <div className="profile-item" key={key}>
                  <span className="profile-value">{value.value}</span>
                </div>
              ))}
            </div>
          </div> */}

          {
            <div className="mappedData">
              <div className="block-labels">
                {Object.entries(info).map(([key, value]) => (
                  <div className="profile-item" key={key}>
                    <span className="profile-label">{value.label}</span>
                    <span className="profile-value">{value.value}</span>
                  </div>
                ))}
              </div>
            </div>
          }
        </div>
        <div className="about-area">
          <h2 className="about-me-baslik">{aboutMe.label}</h2>
          <div className="about-me"> {aboutMe.pr1}</div>
          <div className="about-me"> {aboutMe.pr2}</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
