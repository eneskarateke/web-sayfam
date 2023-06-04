import React from "react";
import "./CSS/Profile.css";

import { useSelector } from "react-redux";

function Profile() {
  const currentLanguage = useSelector((state) => state.currentLanguage);

  const data = useSelector((state) => state.data.data[currentLanguage]);

  const { info, aboutMe, label } = data.profile;

  return (
    <div className="profileContainer">
      <h1 className="ana-baslik">{label}</h1>

      <div className="subBasliklar">
        <div className="profile-area">
          <h2 className="profile-baslik">{label}</h2>
          {
            <div className="mappedData">
              <div className="block-labels">
                {Object.entries(info).map(([key, value]) => (
                  <div className="profile-item" key={key}>
                    <span className="profile-label">{value?.label}</span>
                    <span className="profile-value">{value?.value}</span>
                  </div>
                ))}
              </div>
            </div>
          }
        </div>
        <div className="about-area">
          <h2 className="about-me-baslik">{aboutMe?.label}</h2>
          <div className="about-me">{aboutMe?.pr1}</div>
          <div className="about-me">{aboutMe?.pr2}</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
