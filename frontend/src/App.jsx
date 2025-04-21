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

// designs
import 'font-awesome/css/font-awesome.min.css';
import './index.css'

function App() {

  const location = useLocation();
  const hideHeader =location.pathname === '/';

  return (
    <>
     {!hideHeader && <Nav />}
     {!hideHeader && <DateBanner />}

     <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/ticket" element={<Ticket />} />
      <Route path="/track" element={<Track />} />
      <Route path="/archive" element={<Archive />} />

      <Route path="/ticket/:id" element={<TicketDetail />} />

      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    </>
  )
}

export default App
