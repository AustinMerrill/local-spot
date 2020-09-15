import React from "react";
import whiteLogo from "../../assets/images/whiteLogo.png";
function Nav() {
  return (
    <div className="nav-bar">
      <img className="nav-logo" src={whiteLogo} alt="logo"></img>
      <p className="nav-link">
        <a>Submit Your Business</a>
      </p>
    </div>
  );
}

export default Nav;
