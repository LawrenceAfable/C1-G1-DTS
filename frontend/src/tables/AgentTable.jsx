// dependencies import
import axios from "axios";
import { useEffect, useState } from "react";

// styles import
import layout from './components/table-layout.module.css';
import table from "./components/general-table.module.css";
import form from './components/general-form.module.css';

// Api Import
const ticketURL = import.meta.env.VITE_AGENTS_API;

// component import
import { Pagination } from "./components/tableforms";
import { SearchBar, Dropdown } from "./components/tableforms";


function TableHeader() {
  return(
      <tr className={table.tr}>
        <th className={table.th}>Photo</th>
        <th className={table.th}>ID</th>
        <th className={table.th}>Name</th>
        <th className={table.th}>Email</th>
        <th className={table.th}>Role</th>
        <th className={table.th}>Status</th>
        <th className={table.th}>Last Login</th>
        <th className={table.th}>Action</th>
      </tr>
  )
}

export function TableRow(props) {
  return(
    <tr className={table.tr}>
      <td className={table.td}>
        <img src="../../../public/icon.svg" className={layout.icon}/>
      </td>
      <td className={table.td}>{props.ID}</td>
      <td className={table.td}>{props.Name}</td>
      <td className={table.td}>{props.Email}</td>
      <td className={table.td}>{props.Role}</td>
      <td className={table.td}>{props.Status}</td>
      <td className={table.td}>{props.LastLogin || '—'}</td>
      <td className={table.td}>
        <button className={form.btn}>
          Manage
        </button>
      </td>
    </tr>
  )
}

function AgentTable() {
  const [agents, setAgents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7; // rows per page

  useEffect(() => {
    axios
      .get(`${ticketURL}`)
      .then((response) => {
        const data = response.data;
        setAgents(Array.isArray(data) ? data : data.agents || []);
      })
      .catch((error) => {
        console.error("Failed to fetch agents", error);
      });
  }, []);

  // pagination calculations
  const totalPages = Math.ceil(agents.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const pagedAgents = agents.slice(start, start + itemsPerPage);

  const handleManage = (id) => {
    console.log("Manage agent", id);
  };

  return (
    <div>
      <div className={form.FormContainer}>
        <Dropdown />
        <Dropdown />
        <SearchBar />
      </div>
      <br/>

      <div className={table.tablewrapper}>
        <table className={`${table.tablecontainer} ${table.table}`}>
          <thead>
            <TableHeader />
          </thead>
          <tbody>
            {pagedAgents.map((agent) => (
              <TableRow
                key={agent.ID}
                ID={agent.ID}
                Name={agent.Name}
                Email={agent.Email}
                Role={agent.Role}
                Status={agent.Status}
                LastLogin={agent.LastLogin}
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

      {/* Pagination controls */}
    </div>
  );
}

export default AgentTable;