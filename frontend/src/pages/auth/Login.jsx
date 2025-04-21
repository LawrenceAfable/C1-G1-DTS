import "../../styles/auth-styles/login.css"
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();
  return (
    <div className="login-page">
      <div className="login-main-section">
        <div className="login-left-section"></div> {/* left */}
        <div className="login-right-section"> {/* right */}
          <div className="login-top-header">
            <div className="login-logo"></div> {/* logo */}
            <div className="login-title">
              <h3>Docu<span>Flow</span></h3>
              <p>Document & Ticket Tracking System</p>
            </div> {/* title */}
          </div> {/* top header */}
          <div className="login-bot-inputs">
            <form className="login-form"  onSubmit={(e) => {e.preventDefault(); navigate('/dashboard');}}>
              <div className="form-group">
                <label htmlFor="email" >Email Address</label>
                <input type="email" id="email" placeholder="Enter your email address"/>
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password"/>
              </div>
              <div className="forgot-password">
                <a href="#">Forgot password?</a>
              </div>
             <button className="login-btn">Log In</button>
            </form> {/* forms */}
          </div> {/* bot inputs */}
        </div>
      </div> {/* main panel */}
    </div> // login-page
  )
}

export default Login;