import "./TicketAction.css";

export default function TicketAction({ closeTicketAction }) {
  
  return (
    <main className="ticket-action-wrapper">
      <div className="ticket-action-overlay"></div>
      <div className="ticket-action-page">
        <button onClick={() => closeTicketAction(false)}>X</button>
        <section className="ticket-action-header">
          <div className="ticket-action-title">
            <h1>Ticket No. xx</h1>
            <button>PUSH</button>
          </div>
          <div className="ticket-action-subject">
            <h1>Subject: xx</h1>
          </div>
          <div className="ticket-action-meta">
            <span>Opened on: xx</span>
            <span>Expected Resolution: xx</span>
          </div>
          <div className="ticket-action-status">
            <select name="ticket-action-status" className="action-status">
              <option value="" disabled>Please select an option</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
              <option value="on-hold">On Hold</option>
            </select>
          </div>
        </section>
        <section className="ticket-action-content">
          <div className="ticket-action-desciption">
            <h3>Description</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, esse omnis nemo enim fuga deleniti sint minima quae autem! Distinctio inventore architecto sequi s Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis culpa quas ullam saepe maiores veniam voluptatem sunt, praesentium similique repellat animi accusamus dolorem recusandae ipsa harum quo in error eveniet!ed placeat du Lo Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum mollitia reiciendis modi odit eius exercitationem tempora ipsa, explicabo perspiciatis quae officiis, sapiente voluptatum temporibus saepe repellat dolor dicta! Vel, est.rem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, atque at. Pariatur, modi consequatur fugiat ad voluptate ipsa rerum explicabo vitae ullam a corrupti rem error perspiciatis laboriosam illo corporis! cimus repellendus sunt ipsam ea.
              Lorem ipsum dolor, sit amet consectetur adipisicing elilorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequuntur, enim mollitia ducimus illum nostrum vel quia placeat dolor earum quidem ullam provident minus deserunt qui repellat! Atque, sint debitis!t. Consectetur beatae praesentium, eos assumenda nihil in autem sunt voluptas itaque hic iste ut doloremque molestiae reprehenderit, alias, nam porro exercitationem. Deleniti.
            </p>
          </div>
          <div className="ticket-action-input">
            <textarea placeholder="Add a comment here..."></textarea>
          </div>
          <div className="ticket-action-upload">
            <input type="file" />
          </div>
        </section>
      </div>
    </main>
  );
}
