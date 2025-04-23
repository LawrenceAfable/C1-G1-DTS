import styles from '../../styles/admin-styles/adminstyle.module.css'

// learn
// seperate the page css to the component css

function Status(status){
    const ongoing = {backgroundColor:"yellow"}
    const escalated = {backgroundColor:"red"}
    const completed = {backgroundColor:"green"}
    if(status == "ongoing"){
        return ongoing
    }
    if(status == "escalated"){
        return escalated
    }
    if(status == "completed"){
        return completed
    }
    else{
        return {backgroundColor:"white"}
    }
}

export function AnalyticsCards (props) {
    const handleClick = () => {
        alert('hello');
    }

    return (
        <>
        <div className={styles.AnalyticsCardsItem}
        onClick={handleClick}
        
        >
            <div className={styles.wrapper2}>
                <span className={styles.text}>{props.title}</span>
            </div>

            <div className={styles.wrapper}>
                <div className={styles.AnalyticCardAccent}> 
                </div>
            </div>

        </div>
        </>
    )
}

export function RecentTask (props) {
    return (
        <>
        <div className={styles.RecentTaskItem}>
            <div className={styles.wrapper3}>
                <div className={styles.RecentTaskAccent}></div>
            </div>
            <div className={styles.wrapper4}>
                <span className={styles.text}>dd/mm/yy</span>
                <span className={styles.text}>{props.text}</span>
            </div>

        </div>
        </>
    )
}

export function MonitorCard (props) {
    const title = props.title
    return (
        <>
        <div className={styles.MonitorCardItem}>
            <div className={styles.CardHeaderMain}>
                <div className={styles.CardHeader}>
                    <div className={styles.wrapper5}>
                        <h4>
                            {title}
                        </h4>
                    </div>

                    <div className={styles.wrapper6}>
                        <button>
                            Review
                        </button>
                    </div>
                </div>
                <hr/>

            </div>
            <div>
                {props.monitor}
            </div>

        </div>
        </>
    )
}

export function MonitorCard2 (props) {
    const title = props.title
    return (
        <>
        <div className={styles.MonitorCardItem2}>
            <div className={styles.CardHeaderMain}>
                <div className={styles.CardHeader}>
                    <div className={styles.wrapper5}>
                        <h4>
                            {title}
                        </h4>
                    </div>

                    <div className={styles.wrapper6}>
                        <button>
                            Review
                        </button>
                    </div>
                </div>
                <hr/>
                <br/>
            </div>
            <div>
                {props.monitor}
            </div>

        </div>
        </>
    )
}

export function Dropdown() {
    return (
        <div>
            <select id="time-period" className={styles.dateselector}>
                <option value="this-month">This Month</option>
                <option value="last-month">Last Month</option>
                <option value="quarter">Last Quarter</option>
                <option value="all-time">All Time</option>
            </select>
        </div>
    )
}

export function Pagination({ currentPage, totalPages, setCurrentPage }) {
    return (
      <div className={styles.paginationControls}>
        <button
        className={styles.text}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Previous
        </button>
  
        <span className={styles.text}>
            Page {currentPage} of {totalPages}
        </span>
  
        <button
        className={styles.text}
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    );
  }