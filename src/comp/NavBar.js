import React from "react";

// Assets
import worldImg from "../assets/world.png";

function NavBar() {
  return (
    <nav className="navbar">
      <img src={worldImg} alt="Wold Img" className="navbar--img"/>
      <p className="navbar--text">My Travel Journal</p>
    </nav>
  );
}

export default NavBar