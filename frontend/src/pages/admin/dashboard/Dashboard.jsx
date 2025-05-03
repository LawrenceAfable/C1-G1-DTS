// styles import
import styles from './Dashboard.module.css'
import layout from '../../../styles/general-styles/general-layout.module.css'

// Page-Components
import { AnalyticsCards, MonitorCard, Dropdown, } from "./components/DashboardComponents";
import { TotalTickets } from './components/Monitor';

// Global-Components
import AdminNav from "../../../components/AdminNav";
import ForReviewTable from "../../../tables/ForReviewTable";


function AdminDashboard() {
    return (
        <>
        <AdminNav/>
        
        <section className="dashboard-top-section">
            <div className="hero-content">
                <h1 className="hero-tile">Welcome, Username!</h1>
            </div>
        </section> {/* top */}

        <div className={layout.main}>            
            <div className={styles.section1}>

            </div>
            <br/>
            <div className={styles.section2_section3}>
                <div className={styles.section2}>
                    <h3>Quick Action</h3>
                    <hr/>
                    <br/>
                    <div className={styles.AnalyticsCardsContainer}>
                        {/* to rename as ActionCards */}
                        <AnalyticsCards
                        title="Assign Ticket"
                        status="ongoing"/>
                        <AnalyticsCards
                        title="Assign Ticket"
                        status="completed"/>
                        <AnalyticsCards
                        title="Assign Ticket"
                        status="ongoing"/>
                        <AnalyticsCards
                        title="Assign Ticket"
                        status="ongoing"/>
                    </div>
                </div>

                <div className={styles.section3}>
                    <div className={styles.section3header}>
                        <h3>For Review</h3>
                        <Dropdown/>
                    </div>
                    <hr/>
                    <br/>
                    <ForReviewTable/>
                </div>

            </div>
            <br/>
           

            <div className={styles.section4}>
                <div className={styles.section3header}>
                    <h3>Monitor</h3>
                    <Dropdown/>
                </div>

                <hr/>
                <br/>
                <div className={styles.MonitorCardContainer}>
                    <MonitorCard
                        title="Total Tickets"
                        monitor={<TotalTickets/>}
                    />
                                        <MonitorCard
                        title="Total Tickets"
                        monitor={<TotalTickets/>}
                    />
                                        <MonitorCard
                        title="Total Tickets"
                        monitor={<TotalTickets/>}
                    />
                                        <MonitorCard
                        title="Total Tickets"
                        monitor={<TotalTickets/>}
                    />
                                        <MonitorCard
                        title="Total Tickets"
                        monitor={<TotalTickets/>}
                    />
                                        <MonitorCard
                        title="Total Tickets"
                        monitor={<TotalTickets/>}
                    />
                                        <MonitorCard
                        title="Total Tickets"
                        monitor={<TotalTickets/>}
                    />
    
                </div> 
            </div>

        </div>
 
        </>
    );
}

export default AdminDashboard