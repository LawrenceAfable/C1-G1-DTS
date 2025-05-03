import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "./components/ticket-detail.css";

import "../../../components/TicketAction"
import TicketAction from '../../../components/TicketAction';

function TicketDetail() {

  // open ticket action modal
  const [openTicketAction, setOpenTicketAction] = useState(false);

  // navigate back
  const navigate = useNavigate();

  const {id} = useParams();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
      const fetchticket= async () => {
      const response= await fetch(`http://192.168.1.13:5000/tickets?ticket_id=${id}`)
      const data = await response.json()
      setTicket(data[0]);
    };

    fetchticket();
  }, [id]);

  if (!ticket) return <p>Loading...</p>;
  return(
    <div className="ticket-detail-page">
      {/* Modal */}
      {openTicketAction && <div className="ticket-action-section">
        <TicketAction closeTicketAction={setOpenTicketAction} />
      </div> } {/* left ticket details */}
      <div className="top-ticket-datail">
        <button className="back-button" onClick={() => navigate(-1)}>Back
        </button>
      </div> {/* top */}
      <div className="bot-ticket-datail">
        <div className="left-ticket-details">
          <div className="td-title-cont">
            <h3 className="td-title">Ticket No.{ticket.ticket_id}</h3>
            <p className="td-subject"><strong>Subject:</strong> {ticket.subject}</p>
            <div className="td-meta">
              <p>Started: {ticket.opened_on}</p>
              <p>Expected Resolution: </p>
            </div>
          </div>
          <div className="td-description">
            <h3>Description</h3>
            <p>{ticket.description}</p>
          </div>
          <div className="td-attachment">
            <h3>Attachment</h3>
            <p>pdf</p>
          </div>
          <div className="td-comment">
            <div class="td-commenter-avatar"></div>
            <input type="text" class="comment-input" placeholder="Add a comment..."/>
          </div>
          <div className="td-comment-section">
            <div class="commenter-avatar"></div>
            <div class="comment-content">
              <div class="comment-header">
                  <div class="commenter-name">John Smith</div>
                  <div class="comment-date">mm-dd-yy</div>
              </div>
              <div class="comment-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <div class="comment-actions">
                  <span class="comment-action">Reply</span>
                  <span class="comment-action">Edit</span>
                  <span class="comment-action">Delete</span>
              </div>
            </div> {/* comment content */}
          </div> {/* comment section */}
        </div> {/* left ticket details */}

        <div className="right-ticket-details">
          <button class="action-button" onClick={() => {setOpenTicketAction(true); handleView(ticket.ticket_id); }}>
            Make an Action</button>
          <div className="td-status-card">
            <div class="td-status-label">Status:</div>
            <div class="td-status-badge">{ticket.status}</div>
          </div>
          <div className="td-info-item">
            <div className="td-info-label-value">
              <div className="td-info-label">Priority</div>
              <div className="td-info-value">{ticket.priority}</div>
            </div>
            <div className="td-info-label-value">
              <div className="td-info-label">Ticket Owner</div>
              <div className="td-info-value">{ticket.customer}</div>
            </div>
            <div className="td-info-label-value">
              <div className="td-info-label">Department</div>
              <div className="td-info-value">{ticket.department}</div>
            </div>
            <div className="td-info-label-value">
              <div className="td-info-label">Position</div>
              <div className="td-info-value">{ticket.position}</div>
            </div>
            <div className="td-info-label-value">
              <div className="td-info-label">SLA</div>
              <div className="td-info-value">{ticket.sla}</div>
            </div>
          </div>
          <div className="td-activity-log">
            <div className="td-activity-log-title">Activity Log</div>
            <div className="td-activity-log-content">
              <div class="activity-title">April 1, 9:31 AM</div>
              <div class="activity-text">Status to open</div>
              <div class="activity-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div class="activity-footer">By Sarah Johnson | admin</div>
            </div>
          </div>
        </div>
      </div> {/* bot */}

    </div>
  )
}

export default TicketDetail; 