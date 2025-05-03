import "./NotFound.css"

export default function NotFound() {
  return (
    <main className="notfound-container">
      <div className="notfound-content">
        <div className="notfound-header">
          <h1>404</h1>
          <p>Page Not Found</p>
        </div>
        
        <div className="notfound-image">
          <img
            src="../../../public/error.jpg"
            alt="404 Not Found"
          />
        </div>

        <div className="notfound-message">
          <p>Oops! The page you are looking for does not exist.</p>
          <a href="/" className="notfound-btn">Go Home</a>
        </div>
      </div>
    </main>
  );
}
