import React from "react";

const Profile = () => {
  return (
    <div className="content-section">
      <div className="search-bar">
        <div className="search-logo"></div>
        <div>
          <input
            type="text"
            className="input-control"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="patient-container">
        <div className="header-text">My patient profile</div>
        <div className="row">
          <div className="container-1">
            <div className="section-head">
              <div className="head-1">2d ago</div>
              <div className="head-2">...</div>
            </div>
            <div className="section-img"></div>
            <div className="section-info">
              <div className="info-name">
                {" "}
                Jonathan<div>Smith</div>{" "}
              </div>
              <div className="info-status"> Active</div>
            </div>
            <div className="section-status">
              <div className="profile-status">
                <div className="profile-status-active"></div>
              </div>
              <div className="storage-text"> Storage : 45%</div>
            </div>
          </div>
          <div className="container-1 card-active ">
            <div className="section-head">
              <div className="head-1">15d ago</div>
              <div className="head-2">...</div>
            </div>
            <div className="section-img1"></div>
            <div className="section-info">
              <div className="info-name">
                {" "}
                Kate<div>Smith</div>{" "}
              </div>
              <div className="info-status"> Active</div>
            </div>
            <div className="section-status">
              <div className="profile-status">
                <div className="profile-status-active2"></div>
              </div>
              <div className="storage-text"> Storage : 81%</div>
            </div>
          </div>
          <div className="container-1 card-active ">
            <div className="section-head">
              <div className="head-1">30d ago</div>
              <div className="head-2">...</div>
            </div>
            <div className="section-img2"></div>
            <div className="section-info">
              <div className="info-name">
                {" "}
                Alexandra<div>Smith</div>{" "}
              </div>
              <div className="info-status-inactive"> Inactive</div>
            </div>
            <div className="section-status">
              <div className="profile-status">
                <div className="profile-status-active3"></div>
              </div>
              <div className="storage-text"> Storage : 21%</div>
            </div>
          </div>
          <div className="container-1 add-card">
            <div className="plus alt">
              {/* <div className="plus-icon-1"></div> */}
            </div>
            <div className="add-text">
              Create new <div>patient profile</div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-line"></div>
      <div className="footer-section">
        <div>
          <div className="footer-text">
            Available patient profile
            <span className="footer-text-count "> 3 of 5</span>
          </div>
          <div className="status-bar">
            <div className="active-bar"></div>
          </div>
        </div>
        <div>
          <button className="btn">Upgrade</button>
        </div>
      </div>
    </div>
  );
};
export default Profile;
