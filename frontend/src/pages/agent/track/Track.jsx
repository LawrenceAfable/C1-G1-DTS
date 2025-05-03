import "./components/track.css";

export default function Track() {

  return(
    <main className="track-page">
      <section className="track-page-top">
        <div className="track-page-title">
          <h3>Track</h3>
        </div>
      </section>  {/* top */}

      <section className="track-page-bot">
        <div className="track-page-search-section">
          <input type="text" placeholder="Search tracking number..."/>
          <button>Search</button>
        </div>
        <div className="track-page-tracking-section">
          <h3>Tracking Details</h3>
          <div className="track-page-visual">Tracking Visual</div>
          <div className="track-page-status">
            <p>Status:</p>
            <p>Pending</p> {/* hardcoded */}
          </div>
        </div>
        <div className="track-page-content-section">
          <div className="track-page-item">
            <p>Tracking ID:</p>
            <p>TK-1001</p>
          </div>
          <div className="track-page-item">
            <p>Subject:</p>
            <p>Payment Processing</p>
          </div>
          <div className="track-page-item">
            <p>Priority:</p>
            <p>Medium</p>
          </div>
          <div className="track-page-item">
            <p>Status:</p>
            <p>In Progress</p>
          </div>
          <div className="track-page-item">
            <p>Submitted Date:</p>
            <p>May 31, 2025</p>
          </div>
          <div className="track-page-item">
            <p>Current Operator:</p>
            <p>Jessa Fotouk</p>
          </div>
        </div>
      </section>  {/* bot */}
    </main>
  )

};