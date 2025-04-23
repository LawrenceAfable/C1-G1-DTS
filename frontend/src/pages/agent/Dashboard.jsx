import "../../styles/agent-styles/dashboard.css";

function Dashboard() {

  return(
    <main className="dashboard-page">
      <section className="dashboard-top-section">
        <div className="hero-content">
          <h1 className="hero-tile">Welcome, Username!</h1>
        </div>
      </section> {/* top */}

      <section className="dashboard-bot-section">
        <section className="db-card-section" >
          <h3>Dashboard</h3>
          <div className="status-cont">
            <div className="stat-card">
              <div className="stat-number">XX</div>
              <div className="stat-underline open-underline"></div>
              <div className="stat-label">Open</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">XX</div>
              <div className="stat-underline hold-underline"></div>
              <div className="stat-label">On hold</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">XX</div>
              <div className="stat-underline approved-underline"></div>
              <div className="stat-label">Approved</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">XX</div>
              <div className="stat-underline rejected-underline"></div>
              <div className="stat-label">Rejected</div>
            </div>
          </div> {/* status container */}
        </section> {/* card section */}

        <section className="db-updates-section" >
            <h3>Recent Updates</h3>
            <div className="update-cont">
              <div className="update-item">
                <div className="update-info">
                  <div className="update-date">mm/dd/yy</div>
                  <div className="update-title">Quarterly Report 2019 - 2020...</div>
                  <div className="update-id">TIX-001-234-566</div>
                </div>
                <div class="status-indicator status-pending"></div>
              </div> {/* update item */}
              <div className="update-item">
                <div className="update-info">
                  <div className="update-date">mm/dd/yy</div>
                  <div className="update-title">Laptop Request: to create...</div>
                  <div className="update-id">TIX-001-232-123</div>
                </div>
                <div class="status-indicator status-open"></div>
              </div> {/* update item */}
              <div className="update-item">
                <div className="update-info">
                  <div className="update-date">mm/dd/yy</div>
                  <div className="update-title">Utilities Paid Month of January...</div>
                  <div className="update-id">TIX-093-343-234</div>
                </div>
                <div class="status-indicator status-approved"></div>
              </div> {/* update item */}
            </div> {/* update cont*/}
        </section>

        <section className="db-tickets-section" >
          <div className="tickets-cont">
            <h3>Upcoming Tickets</h3>
            <div className="upcoming-tickets-cont">
              <table className="ut-table-ticket">
                <tbody>
                  <tr>
                    <td>mm/dd/yy</td>
                    <td>Tix-002-232-233</td>
                    <td>
                      <span className="avatar"></span>
                      First Name, Last Name
                    </td>
                    <td>Status</td>
                    <td className="due-date">6 days</td>
                  </tr>

                  <tr>
                    <td>mm/dd/yy</td>
                    <td>Tix-002-232-233</td>
                    <td>
                      <span className="avatar"></span>
                      First Name, Last Name
                    </td>
                    <td>Status</td>
                    <td className="due-date">6 days</td>
                  </tr>

                  <tr>
                    <td>mm/dd/yy</td>
                    <td>Tix-002-232-233</td>
                    <td>
                      <span className="avatar"></span>
                      First Name, Last Name
                    </td>
                    <td>Status</td>
                    <td className="due-date">6 days</td>
                  </tr>
                  <tr>
                    <td>mm/dd/yy</td>
                    <td>Tix-002-232-233</td>
                    <td>
                      <span className="avatar"></span>
                      First Name, Last Name
                    </td>
                    <td>Status</td>
                    <td className="due-date">6 days</td>
                  </tr>
                  <tr>
                    <td>mm/dd/yy</td>
                    <td>Tix-002-232-233</td>
                    <td>
                      <span className="avatar"></span>
                      First Name, Last Name
                    </td>
                    <td>Status</td>
                    <td className="due-date">6 days</td>
                  </tr>
                  <tr>
                    <td>mm/dd/yy</td>
                    <td>Tix-002-232-233</td>
                    <td>
                      <span className="avatar"></span>
                      First Name, Last Name
                    </td>
                    <td>Status</td>
                    <td className="due-date">6 days</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={5}>
                      <div class="pagination">
                        <a href="#" class="page-button">&lt; Prev</a>
                        <div class="page-number">1</div>
                        <a href="#" class="page-button">Next &gt;</a>
                        <span class="page-count">page 1 of 10</span>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </section>

      </section> {/* bot  */}
    </main>
  )

};

export default Dashboard;