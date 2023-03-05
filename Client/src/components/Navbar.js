import { Link, BrowserRouter, Router, Route } from 'react-router-dom';
import './Style.css';

function Navbar() {
    return (
      <Route>
        <p id = "one">Planner</p>
        <nav className="navbar">
        <ul className="nav-links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/MyEvents">
            <li>My Events</li>
          </Link>
          <Link to="/My Reminders">
            <li>My Reminders</li>
          </Link>
          <Link to="/My Journal">
            <li>My Journal</li>
          </Link>
          <Link to="/Logout">
            <li>Logout</li>
          </Link>
        </ul>
      </nav>
      </Route>     
    );
  }
  
  export default Navbar;