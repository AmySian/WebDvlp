import React from "react";
import { slide as Menu } from "react-burger-menu";
import{ Link } from "react-router-dom";

function Sidebar() {
  const menuStyle = {
    color:"white"  
  };
  return (
    <Menu>
      <ul className="menu-links">
        <Link to="/" style={menuStyle}>
          <li>Home</li>
        </Link>
        <Link to="/about" style={menuStyle}>
          <li>About</li>
        </Link>
      </ul>
    </Menu>
  );
};
export default Sidebar;