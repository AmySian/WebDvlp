import React from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

export default class Dashboard extends React.Component {
    disconnect = () => {
      window.location = "/";
    }
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/dashboard" className="navbar-brand">Homepage</Link>
            <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
              <Link to="/dashboard/user" className="nav-link">User Infos</Link>
              </li>
              <li className="navbar-item">
              <Link to="/dashboard" className="nav-link">Homepage</Link>
              </li>
              <li className="navbar-item">
              <Link to="/" className="nav-link">Log out</Link>
              </li>
            </ul>
            </div>
          </nav>
        );
      }
    }