// dependencies import
import axios from "axios";
import { useEffect, useState } from "react";

// styles import
import styles from '../../styles/admin-styles/adminstyle.module.css';
const ticketURL = import.meta.env.VITE_TICKET_API;

// component import
import { RecentTask, Pagination} from "./DashboardComponents";
import { SearchBar, Dropdown } from "./General";


export function ForReviewTable() {
    const [tickets, setTickets] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    useEffect(() => {
      axios.get(`${ticketURL}`)
        .then((response) => {
          setTickets(response.data);
        })
        .catch((error) => {
          console.error("Failed to fetch tickets", error);
        });
    }, []);
  
    // Calculate pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentTickets = tickets.slice(indexOfFirstItem, indexOfLastItem);
  
    const totalPages = Math.ceil(tickets.length / itemsPerPage);
  
    return (
      <div>
        <div className={styles.reviewwcontainer}>
          {currentTickets.map((ticket) => (
            <RecentTask key={ticket.id} text={ticket.subject} />
          ))}
          <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          setCurrentPage={setCurrentPage}
          />
          
        </div>
      </div>
      
    );
  }

function AgentHeader() {
  return(
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Status</th>
        <th>Last Login</th>
        <th>Action</th>
      </tr>
  )
}

export function AgentItem(props) {
  return(
    <tr>
    <td>{props.ID}</td>
    <td>{props.Name}</td>
    <td>{props.Email}</td>
    <td>{props.Role}</td>
    <td>{props.Status}</td>
    <td>{props.LastLogin || '—'}</td>
    <td>
      <button>
        Manage
      </button>
    </td>
  </tr>
  )
}

export function AgentTable() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.100.6:5000/agents")
      .then((response) => {
        const data = response.data;
        setAgents(Array.isArray(data) ? data : data.agents || []);
      })
      .catch((error) => {
        console.error("Failed to fetch agents", error);
      });
  }, []);

  const handleManage = (id) => {
    console.log("Manage agent", id);
  };

  return (
    <div className={styles.agentTableContainer}>
      <SearchBar />
      <Dropdown />

      <table className={styles.agentTable} border={1} cellPadding={8} cellSpacing={0}>
        <thead>
          <AgentHeader />
        </thead>
        <tbody>
          {agents.map((agent) => (
            <AgentItem
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
  );
}