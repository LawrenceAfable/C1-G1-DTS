import styles from './adminstyle.module.css'
// import styles from './DashboardComponents.module.css'


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
