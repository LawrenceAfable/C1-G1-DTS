import styles from '../../styles/admin-styles/monitor.module.css'

export function TotalTickets(props) {
    return (
        <div>
            <div>
                <div class="metric-title">Total Tickets</div>
                <div class="metric-value">247 / 1,853</div>
                <div class="metric-comparison positive">↑ 12% vs previous period</div>
            </div>
        </div>
    )
}
