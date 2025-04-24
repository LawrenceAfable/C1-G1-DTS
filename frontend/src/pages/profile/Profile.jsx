import "../../styles/profile-styles/profile.css";

export default function Profile() {
  return (
    <main className="profile-page">
      <section className="profile-page-wrapper">
        <section className="left-profile-page">
          <h1 className="profile-title">Profile</h1>
          <div className="profile-page-image-section">
            <div className="profile-page-image">
              <img src="https://i.pinimg.com/736x/e6/50/7f/e6507f42d79520263d8d952633cedcf2.jpg" alt="Profile" />
            </div>
          </div>
          <div className="profile-page-info-section">
            <div className="pp-info-name">
              <h3>Gemi Go</h3>
            </div>
            <div className="pp-info-position">
              <span className="info-label">Position:</span>
              <span className="info-value">IT Support Specialist</span>
            </div>
            <div className="pp-info-department">
              <span className="info-label">Department:</span>
              <span className="info-value">IT Support/Help Desk</span>
            </div>
          </div>
        </section>
        
        <section className="right-profile-page">
          <div className="profile-settings-card">
            <h3 className="section-title">Profile Settings</h3>
            <div className="profile-page-setting-section">
              <div className="pp-user-info-cont">
                <div className="pp-info-item">
                  <label htmlFor="firstname">First Name</label>
                  <input type="text" id="firstname" placeholder="Enter first name" />
                </div>
                <div className="pp-info-item">
                  <label htmlFor="middlename">Middle Name</label>
                  <input type="text" id="middlename" placeholder="Enter middle name (if applicable)" />
                </div>
                <div className="pp-info-item">
                  <label htmlFor="lastname">Last Name</label>
                  <input type="text" id="lastname" placeholder="Enter last name" />
                </div>
                <div className="pp-info-item">
                  <label htmlFor="suffix">Suffix</label>
                  <input type="text" id="suffix" placeholder="Enter suffix (if applicable)" />
                </div>
              </div>
              <div className="pp-user-company-cont">
                <div className="pp-info-item">
                  <label htmlFor="company-id">Company ID</label>
                  <input type="text" id="company-id" placeholder="XXX-XXX-XXX" />
                </div>
                <div className="pp-info-item">
                  <label htmlFor="department">Department</label>
                  <input type="text" id="department" placeholder="XXXXXXXXXX" />
                </div>
                <div className="save-button-container">
                  <button className="save-button">SAVE CHANGES</button>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-auth-card">
            <h3 className="section-title">Authentication Details</h3>
            <div className="profile-page-auth-section">
              <div className="pp-info-item">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="Email@gmail.com" />
              </div>
              <div className="pp-info-item">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="-------" />
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
