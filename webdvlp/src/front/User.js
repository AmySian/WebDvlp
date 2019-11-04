import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class User extends Component {

  render() {
    return(
    <div id="General">
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
  <div id="conteneur">
  <div id="Users">
      <div id="UserIcon"></div>
      <div className="element">Infos Utilisateur</div>
  </div>

  <div id="Salles">
      <div id="ClassroomIcon"></div>
      <div className="element">Infos Salle</div>
  </div>

  <div id="Extras">
      <div id="ExtrasIcon"></div>
      <div className="element">Extras</div>
  </div>
</div></div>)
}}