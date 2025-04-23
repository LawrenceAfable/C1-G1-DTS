// routes
import { Routes, Route, useLocation } from 'react-router-dom'

// components
import Nav from './components/Nav'
import DateBanner from './components/DateBanner'

// pages
import Dashboard from './pages/agent/Dashboard'
import Ticket from './pages/agent/Ticket'
import Track from './pages/agent/Track'
import Archive from './pages/agent/Archive'
import TicketDetail from './pages/agent/TicketDetail'
import Login from './pages/auth/Login'
import NotFound from './pages/error/NotFound'; 

// admin
import AdminDashboard from './admin/Dashboard'
import Agents from './admin/Agents'
import Workflow from './admin/Workflow'
import AdminArchive from './admin/Archive'

// designs
import 'font-awesome/css/font-awesome.min.css';
import './index.css'

// css
import './styles/component-styles/datebanner.css'


function App() {

  const location = useLocation();

  const hideHeaderRoutes = [
    '/'
  ]
  const isAdminView = location.pathname.startsWith('/admin');
  const showHeader = !hideHeaderRoutes.includes(location.pathname) && !isAdminView
  return (
    <>
     {showHeader && <Nav />}
     {showHeader && <DateBanner className="date-banner"/>}

     {/* Hides navbar in admin routes */}

     <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/ticket" element={<Ticket />} />
      <Route path="/track" element={<Track />} />
      <Route path="/archive" element={<Archive />} />

      <Route path="/ticket/:id" element={<TicketDetail />} />

      {/* admin */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/agents" element={<Agents />} />
      <Route path="/admin/workflow" element={<Workflow />} />
      <Route path="/admin/archive" element={<AdminArchive />} />
    
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    </>
  )
}

export default App
