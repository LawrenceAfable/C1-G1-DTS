// dependencies import
import axios from "axios";
import { useEffect, useState } from "react";

// styles import
import styles from '../../styles/admin-styles/adminstyle.module.css';


// component import
import { AnalyticsCards, RecentTask, Pagination, Dropdown, MonitorCard2 } from "./DashboardComponents";


export function ForReviewTable() {
    const [tickets, setTickets] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
  
    useEffect(() => {
      axios.get("http://localhost:5000/tickets")
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
    );
  }
