// dependencies import
import axios from "axios";
import { useEffect, useState } from "react";

// styles import
import layout from '../../../styles/general-styles/general-layout.module.css';
import table from '../../../styles/general-styles/general-table.module.css';
import form from '../../../styles/general-styles/general-form.module.css';

// Api Import
const ticketURL = import.meta.env.VITE_ARCHIVE_API;

// component import
import { Pagination } from "../components/DashboardComponents";
import { SearchBar, Dropdown } from "../components/General";

// Table header
function ArchiveHeader() {
  return (
    <tr className={table.tr}>
      <th className={table.th}>Ticket ID</th>
      <th className={table.th}>Subject</th>
      <th className={table.th}>Customer</th>
      <th className={table.th}>Status</th>
      <th className={table.th}>Issued On</th>
      <th className={table.th}>Resolved On</th>
      <th className={table.th}>Resolved By</th>
      <th className={table.th}>Action</th>
    </tr>
  );
}

// Single row item for a ticket
export function ArchiveItem(props) {
  return (
    <tr className={table.tr}>
      <td className={table.td}>{props.ticket_id}</td>
      <td className={table.td}>{props.subject}</td>
      <td className={table.td}>{props.customer}</td>
      <td className={table.td}>{props.status}</td>
      <td className={table.td}>{props.issued_on}</td>
      <td className={table.td}>{props.resolved_on}</td>
      <td className={table.td}>{props.resolved_by}</td>
      <td className={table.td}>
        <button className={form.btn} onClick={() => onManage(props.ticket_id)}>
            view
        </button>
      </td>
    </tr>
  );
}

function ArchiveTable() {
  const [tickets, setTickets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  useEffect(() => {
    axios
      .get(ticketURL)
      .then((res) => {
        const data = res.data;
        setTickets(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error("Failed to fetch tickets", err);
      });
  }, []);

  const totalPages = Math.ceil(tickets.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const pagedTickets = tickets.slice(start, start + itemsPerPage);

  const handleManage = (ticket_id) => {
    console.log("Manage ticket:", ticket_id);
    // TODO: navigation/modal functionality
  };

  return (
    <div>
      <div className={form.FormContainer}>
        <Dropdown />
        <Dropdown />
        <SearchBar />
      </div>
      <br />

      <div className={table.tablewrapper}>
        <table className={`${table.tablecontainer} ${table.table}`}>
          <thead>
            <ArchiveHeader />
          </thead>
          <tbody>
            {pagedTickets.map((ticket, idx) => (
              <ArchiveItem
                key={`${ticket.ticket_id}-${idx}`}
                ticket_id={ticket.ticket_id}
                subject={ticket.subject}
                customer={ticket.customer}
                status={ticket.status}
                issued_on={ticket.issued_on}
                resolved_on={ticket.resolved_on}
                resolved_by={ticket.resolved_by}
                onManage={handleManage}
              />
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default ArchiveTable;
