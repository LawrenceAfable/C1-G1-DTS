import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/agent-styles/ticket.css";

export default function Ticket() {

   // select or dropdown
   const [priority, setPriority] = useState("");
   const [status, setStatus] = useState("");
   const [date_status, setDate_Status] = useState("");

   //  navigate to ticket details
   const navigate = useNavigate();
   const handleView = (ticketId) => {
    navigate(`/ticket/${ticketId}`); // this should match the route name in app.jsx
   };

   // Fetch data from dummy api
   const [tickets, setTickets] = useState([]); // state for tickets

   // fetch data from JSON server 
   useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch('http://localhost:5000/tickets');
        if (!response.ok) {
          throw new Error('Failed to fetch tickets');
        }
        const data = await response.json();
        setTickets(data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
    }, []); // useEffect

  return(
    <main className="ticket-page">
      <section className="ticket-page-top">
        <div className="ticket-page-title">
          <h3>Tickets</h3>
        </div>
        <div className="ticket-page-filter">
          <div className="ticket-page-filter-category">
            <select className="drop-priority" name="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
              <option value="" disabled>Please select an option</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <select className="drop-status" name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="" disabled>Please select an option</option>
              {/* <option value="pending">Pending</option> */}
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
              <option value="on-hold">On Hold</option>
            </select>
            <select className="drop-date" name="date_status" value={date_status} onChange={(e) => setDate_Status(e.target.value)}>
              <option value="" disabled>Please select an option</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
          <div className="ticket-page-filter-search">
          <input type="text" id="search-id" name="search-ticket" placeholder="Search by ticket ID or keywords..." />
          <button className="search-button">Search</button>
          </div>
        </div>
      </section>  {/* top */}

      <section className="ticket-page-bot">
        <div className="ticket-page-table-cont">
          <table className="ticket-page-table">
            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>Subject</th>
                <th>Customer</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Opened On</th>
                <th>SLA</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id}>
                <td className="ticket-id">{ticket.ticket_id}</td>
                <td className="ticket-subject">{ticket.subject}</td>
                <td className="ticket-customer">{ticket.customer}</td>
                <td className={`priority-${ticket.priority.toLowerCase()}`}>
                  {ticket.priority}
                </td>
                <td className={`ticket-status-${ticket.status.replace(/\s+/g, '-').toLowerCase()}`}>
                  {ticket.status}
                </td>
                <td className="ticket-opened-on">{ticket.opened_on}</td>
                <td className="ticket-sla">{ticket.sla}</td>
                <td>
                  <button className="view-button" onClick={() => handleView(ticket.ticket_id)}>View</button>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="timestamp">Apr 1, 2025 at 09:23 AM</div>
          <div className="pagination">
            <div className="page-item disabled">&lt;</div>
            <div className="page-item active">1</div>
            <div className="page-item">2</div>
            <div className="page-item">3</div>
            <div className="page-item">&gt;</div>
        </div>

      </section>  {/* bot */}
    </main>
  )

};