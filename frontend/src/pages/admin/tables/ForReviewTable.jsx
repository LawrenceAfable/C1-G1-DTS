// dependencies import
import axios from "axios";
import { useEffect, useState } from "react";

// styles import
import styles from '../../../styles/admin-styles/adminstyle.module.css';

// Api Import
const ticketURL = import.meta.env.VITE_TICKET_API;

// component import
import { RecentTask, Pagination} from "../components/DashboardComponents";


function ForReviewTable() {
    const [tickets, setTickets] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;
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
      <>
      <div>
        <div className={styles.wrapper7}>
          <div className={styles.reviewwcontainer}>
            {currentTickets.map((ticket) => (
              <RecentTask key={ticket.id} text={ticket.subject} />
            ))}
          </div>
        </div>
        <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        setCurrentPage={setCurrentPage}
        />
      </div>

      </>

    );
  }

  export default ForReviewTable;