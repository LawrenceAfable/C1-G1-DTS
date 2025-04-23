import styles from '../../styles/general-styles/general-layout.module.css';
import texts from '../../styles/general-styles/general-text.module.css';

export function TitleCards(props) {
    return (
        <>
            <span className={texts.title}>admin / {props.user}</span>
            <h2>{props.title}</h2>
            <hr/>
        </>
    )
}

export function SearchBar(props) {
    return (
        <div className="archive-page-search-cont">
            <input type="text" placeholder="Search by ticket ID or keywords..." />  
            <button className="archive-search-button">Filter</button>
        </div>
    )
}

export function Dropdown(props) {
    return(
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