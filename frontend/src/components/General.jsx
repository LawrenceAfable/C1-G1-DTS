import form from './GeneralForm.module.css';
import texts from './GeneralText.module.css';

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
        <div className={form.FormContainer}>
            <i class="fas fa-search"></i>
            <input 
            className={form.SearchBar}
            type="text" 
            placeholder="Search by ticket ID or keywords..." />  
                        <button
            className={form.btn}>Filter</button>
        </div>
    )
}

export function Dropdown(props) {
    return(
        <>
        <select 
        className={form.dropdown}
        id="time-period">
            <option value="this-month">This Month</option>
            <option value="last-month">Last Month</option>
            <option value="quarter">Last Quarter</option>
            <option value="all-time">All Time</option>
        </select>
    </>
    )
}