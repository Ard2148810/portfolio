import React from "react";
import '../style/Header.sass'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
    return (
        <header>
            <div className="name-container">
                <h1>Adrian A<span className={"special-letter"} data-char="L">Ł</span>aszewski</h1>
                <h3>Software Engineer</h3>
            </div>
            <div className="header-scroll">
                <FontAwesomeIcon icon={faChevronDown} size="3x"/>
            </div>
        </header>
    );
}

export default Header;