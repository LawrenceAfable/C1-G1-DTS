import '../styles/component-styles/nav.css';

import {NavLink} from 'react-router-dom'
import { useState } from 'react';
import DateBanner from './DateBanner';

export default function AdminNav() {
  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  // similar logic from the regular Nav, just added admin variables in the nav.css

  return(
    <>

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
          to="/admin"end
          className={({isActive}) => (isActive ? 'admin-nav-link active' : 'admin-nav-link')}>Dashboard</NavLink>
        <NavLink
          to="/admin/agents"
          className={({isActive}) => (isActive ? 'admin-nav-link active' : 'admin-nav-link')}>Agent</NavLink>
        <NavLink
          to="/admin/workflow"
          className={({isActive}) => (isActive ? 'admin-nav-link active' : 'admin-nav-link')}>Workflow</NavLink>
        <NavLink
          to="/admin/archive"
          className={({isActive}) => (isActive ? 'admin-nav-link active' : 'admin-nav-link')}>Archive</NavLink>
      </div> {/* nav links  */}

      <div className="user-section">
        <p>User Name</p> {/* hardcoded */}
        <div className="notif-bell">
        <i className="fa fa-bell"></i>
        </div>
        <div className="user-avatar"></div>
      </div>
    </nav>
    <DateBanner className="admin-nav"/>
    </>
  )
}
