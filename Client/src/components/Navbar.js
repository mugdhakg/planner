import { Link, BrowserRouter, Router, Route } from 'react-router-dom';
import './Style.css';

function Navbar() {
    return (
      <Route>
        <p id = "one">Planner</p>
        <nav className="navbar">
        <ul className="nav-links">
          <Link to="/">
            <li>Dashboard</li>
          </Link>
          <Link to="/MyEvents">
            <li>My Events</li>
          </Link>
          <Link to="/MyToDo">
            <li>My To-Do</li>
          </Link>
          <Link to="/MyNotes">
            <li>My Notes</li>
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