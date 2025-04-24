  import { use } from 'react';
import '../styles/component-styles/profile-modal.css'

  import { useNavigate } from 'react-router-dom';

  export default function ProfileModal() {

    // navigate to profile image
    const navigate = useNavigate();

    const handleView = () => {
      navigate('/profile');
    };
    

    return(
      <main className="profile-modal-page">
        <div className="pm-name-section">
          <div className="pm-picture"></div>
          <div className="pm-name">
            <span>Username</span>
            <span>email@gmail.com</span>
          </div>
        </div>
        <div className="pm-acc-section" onClick={handleView}>
          <div className="pm-icon">
           <i className="fa fa-cog"></i>
          </div>
          <span>Account Settings</span>
        </div>
        <div className="pm-logout-section">
          <div className="pm-icon">
            <i className="fa fa-sign-out"></i>
          </div>
          <span>Log out</span>
        </div>
      </main>
    );
  }

    