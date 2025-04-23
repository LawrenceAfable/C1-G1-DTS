import React, { useState, useEffect } from 'react';

import "../../styles/agent-styles/archive.css";

export default function Archive() {

  const [archive_status, setArchiveStatus] = useState("")

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
    <main className="archive-page">
      <section className="archive-page-top">
        <div className="archive-page-title">
            <h3>Archive</h3>
        </div>
        <div className="archive-page-filter-section">
          <div className="archive-page-search-cont">
            <input type="text" placeholder="Search by ticket ID or keywords..." />  
            <button className="archive-search-button">Filter</button>
          </div>
          <div className="archive-page-category-cont">
            <select className="archive-drop-status" name="archive-status" value={archive_status} onChange={(e) => setArchiveStatus(e.target.value)}>
                <option value=""disabled>Please select an option</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
            </select>
            <div className="archive-date">
              <input type="date" name="start-date"/>
              <input type="date" name="end-date"/>
              <button className="archive-date-button">Filter</button>
            </div>
          </div>
        </div> {/* archive-page-filter-section */}
      </section>  {/* top */}

      <section className="archive-page-bot">
        <div className="archive-page-table-cont">
          <table className="archive-page-table">
            <thead>
              <tr>
                <th>Ticket ID</th>
                  <th>Subject</th>
                  <th>Customer</th>
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