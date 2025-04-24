import '../styles/component-styles/nav.css';

import {NavLink} from 'react-router-dom'
import { useState } from 'react';

export default function Nav({setOpenProfileModal, setOpenNotifModal}) {

  const handleAvatarClick = () => {
    setOpenProfileModal(prevState => !prevState)
    setOpenNotifModal(false); // close notif modal if open
  }

  const handleNotifClick = () => {
    setOpenNotifModal(prev => !prev);
    setOpenProfileModal(false); // close profile modal if open
  };

  // state for menu bar
  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  return(
    <nav className="navbar">
      <div className="logo-section">
        <div className="logo-img"></div>
        <span>DTS</span>
      </div>  {/* logo section  */}

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <NavLink
          to="/dashboard"
          className={({isActive}) => (isActive ? 'nav-link active' : 'nav-link')}>Dashboard</NavLink>
        <NavLink
          to="/ticket"
          className={({isActive}) => (isActive ? 'nav-link active' : 'nav-link')}>Ticket</NavLink>
        <NavLink
          to="/track"
          className={({isActive}) => (isActive ? 'nav-link active' : 'nav-link')}>Track</NavLink>
        <NavLink
          to="/archive"
          className={({isActive}) => (isActive ? 'nav-link active' : 'nav-link')}>Archive</NavLink>
      </div> {/* nav links  */}

      <div className="user-section">
        <p>User Name</p> {/* hardcoded */}
        <div className="notif-bell" onClick={handleNotifClick}>
          <i className="fa fa-bell"></i>
        </div>
        <img className="user-avatar" src="https://i.pinimg.com/736x/e6/50/7f/e6507f42d79520263d8d952633cedcf2.jpg" alt="Anime Avatar"onClick={handleAvatarClick}></img>
      </div>
    </nav>
  )
}
