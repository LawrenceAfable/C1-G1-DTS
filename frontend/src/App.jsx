// routes
import { Routes, Route, useLocation } from 'react-router-dom'

// hooks
import { useState, useEffect } from 'react';  

// components
import Nav from './components/Nav'
import DateBanner from './components/DateBanner'
import ProfileModal from './components/ProfileModal' // Import the modal
import NotifModal from './components/NotifModal';

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

// admin
import AdminDashboard from './pages/admin/Dashboard'
import Agents from './pages/admin/Agents'
import Workflow from './pages/admin/Workflow'
import AdminArchive from './pages/admin/Archive'

function App() {

  const location = useLocation();
  const [openProfileModal, setOpenProfileModal] = useState(false); // profile modal
  const [openNotifModal, setOpenNotifModal] = useState(false); // notif modal

    // Paths where header should be hidden entirely
    const hideHeaderRoutes = ['/'];

    // Determine header visibility
    const isAdminView = location.pathname.startsWith('/admin');
    const hideHeader = hideHeaderRoutes.includes(location.pathname) || isAdminView;
    const showHeader = !hideHeader;

  // modal close when route is change
  useEffect(() => {
    setOpenProfileModal(false);
    setOpenNotifModal(false)
  }, [location])

  // modal close when the page is resize
  useEffect(() => {
    const handleResize = () => {
      setOpenProfileModal(false); 
      setOpenNotifModal(false);
    };

    // event listener
    window.addEventListener('resize', handleResize);

    // clean event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <>
     {!hideHeader && <Nav setOpenProfileModal={setOpenProfileModal} setOpenNotifModal={setOpenNotifModal}/>}
     {!hideHeader && <DateBanner className="date-banner" />}
     {openProfileModal && <ProfileModal />}
     {openNotifModal && <NotifModal />}

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

              {/* Admin */}
        <Route path="/admin" element={<AdminDashboard/>} />
        <Route path="/admin/agents" element={<Agents />} />
        <Route path="/admin/workflow" element={<Workflow />} />
        <Route path="/admin/archive" element={<AdminArchive />} />

      {/* Profile */}
      <Route path="/profile" element={<Profile />} />

      {/* Errors */}
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    </>
  )
}

export default App;