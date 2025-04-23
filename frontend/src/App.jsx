// routes
import { Routes, Route, useLocation } from 'react-router-dom'

// hooks
import { useState, useEffect } from 'react';  

// components
import Nav from './components/Nav'
import DateBanner from './components/DateBanner'
import ProfileModal from './components/ProfileModal' // Import the modal

// pages
import Dashboard from './pages/agent/Dashboard'
import Ticket from './pages/agent/Ticket'
import Track from './pages/agent/Track'
import Archive from './pages/agent/Archive'
import TicketDetail from './pages/agent/TicketDetail'
import Login from './pages/auth/Login'
import NotFound from './pages/error/NotFound'; 
import Profile from './pages/profile/Profile'

// designs
import 'font-awesome/css/font-awesome.min.css';
import './index.css'

function App() {

  const location = useLocation();
  const [openProfileModal, setOpenProfileModal] = useState(false); 

  useEffect(() => {
    setOpenProfileModal(false);
  }, [location])

  // modal close when the page is resize
  useEffect(() => {
    const handleResize = () => {
      setOpenProfileModal(false); 
    };

    // event listener
    window.addEventListener('resize', handleResize);

    // clean event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  const hideHeader = location.pathname === '/';

  return (
    <>
     {!hideHeader && <Nav setOpenProfileModal={setOpenProfileModal}/>}
     {!hideHeader && <DateBanner />}
     {openProfileModal && <ProfileModal />}

     <Routes>
      {/* Auth */}
      <Route path="/" element={<Login />} />

      {/* Main Pages */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/ticket" element={<Ticket />} />
      <Route path="/track" element={<Track />} />
      <Route path="/archive" element={<Archive />} />

      {/* Detailed Pages */}
      <Route path="/ticket/:id" element={<TicketDetail />} />

      {/* Profile */}
      <Route path="/profile" element={<Profile />} />

      {/* Errors */}
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    </>
  )
}

export default App;
