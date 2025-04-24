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

// admin
import AdminDashboard from './pages/admin/Dashboard'
import Agents from './pages/admin/Agents'
import Workflow from './pages/admin/Workflow'
import AdminArchive from './pages/admin/Archive'


// designs
import 'font-awesome/css/font-awesome.min.css';
import './index.css'

// css
import './styles/component-styles/datebanner.css'


function App() {
  const location = useLocation();
  const [openProfileModal, setOpenProfileModal] = useState(false);

  // Paths where header should be hidden entirely
  const hideHeaderRoutes = ['/'];

  // Determine header visibility
  const isAdminView = location.pathname.startsWith('/admin');
  const hideHeader = hideHeaderRoutes.includes(location.pathname) || isAdminView;
  const showHeader = !hideHeader;

  // Close profile modal on route change
  useEffect(() => {
    setOpenProfileModal(false);
  }, [location.pathname]);
  const [openNotifModal, setOpenNotifModal] = useState(false); // notif modal


  // modal close when route is change
  useEffect(() => {
    setOpenProfileModal(false);
    setOpenNotifModal(false)
  }, [location])

  // Close profile modal on window resize
  useEffect(() => {
    const handleResize = () => {
      setOpenProfileModal(false); 
      setOpenNotifModal(false);
    };

    // event listener
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {showHeader && (
        <>
          <Nav setOpenProfileModal={setOpenProfileModal} />
          <DateBanner className="date-banner" />
        </>
      )}
     {openProfileModal && <ProfileModal />}
     {openNotifModal && <NotifModal />}

      {openProfileModal && <ProfileModal />}

      <Routes>
        {/* Public/Login */}
        <Route path="/" element={<Login />} />

        {/* Main Pages (requires auth) */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/track" element={<Track />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/ticket/:id" element={<TicketDetail />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/agents" element={<Agents />} />
        <Route path="/admin/workflow" element={<Workflow />} />
        <Route path="/admin/archive" element={<AdminArchive />} />

        {/* Profile */}
        <Route path="/profile" element={<Profile />} />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
