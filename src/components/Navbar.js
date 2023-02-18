import React from "react";
import AibnbIcon from "../images/airbnb-logo.png"

function Navbar() {
    return (
        <nav className = "nav--main">
            <img className="nav--img" src={AibnbIcon} alt="Airbnb Icon"/>
        </nav>
    )
}

export default Navbar;