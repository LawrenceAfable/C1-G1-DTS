function AdminArchive() {
    return (
        <>

<body>
  <div class="dashboard">
    <h1>📊 Admin Dashboard - Ticket Statistics</h1>

    <div class="grid">
      <div class="card"><h3>Total Tickets</h3><div class="value">1,234</div></div>
      <div class="card"><h3>Open Tickets</h3><div class="value">245</div></div>
      <div class="card"><h3>Resolved Tickets</h3><div class="value">812</div></div>
      <div class="card"><h3>Escalated Tickets</h3><div class="value">45</div></div>
      <div class="card"><h3>SLA Breaches</h3><div class="value">18</div></div>
      <div class="card"><h3>Avg. Response Time</h3><div class="value">2h 15m</div></div>
      <div class="card"><h3>Avg. Resolution Time</h3><div class="value">4h 38m</div></div>
    </div>
    <div class="section-title">📅 Ticket Trends Over Time</div>
    <div class="card chart-placeholder">[Line Chart Placeholder]</div>

    <div class="grid">
      <div>
        <div class="section-title">🔄 Status Distribution</div>
        <div class="card chart-placeholder">[Pie Chart Placeholder]</div>
      </div>
      <div>
        <div class="section-title">🚦 Priority Breakdown</div>
        <div class="card chart-placeholder">[Bar Chart Placeholder]</div>
      </div>
    </div>

    <div class="grid">
      <div>
        <div class="section-title">⏱️ SLA Compliance</div>
        <div class="card chart-placeholder">[Gauge Chart Placeholder]</div>
      </div>
      <div>
        <div class="section-title">👨‍💻 Agent Performance</div>
        <div class="card chart-placeholder">[Table/Bar Chart Placeholder]</div>
      </div>
    </div>

    <div class="section-title">📂 Category/Department-wise Tickets</div>
    <div class="card chart-placeholder">[Heatmap or Stacked Bar Chart Placeholder]</div>

    <div class="section-title">📍 Location-Based Analytics</div>
    <div class="card chart-placeholder">[Map View Placeholder]</div>

    <div class="section-title">🧠 Smart Insights</div>
    <div class="card">
      <ul>
        <li>🔔 6 tickets likely to breach SLA in the next 24 hours</li>
        <li>📌 Top categories: Permit Inquiries, Sanitation, Complaints</li>
        <li>📣 "Confusing Process" tagged on 12 active tickets</li>
        <li>🧠 Suggestion: Reassign 15 tickets from Agent John to balance load</li>
      </ul>
    </div>
  </div>
</body>
        </>
    )
}


export default AdminArchive