import React from "react";
import '../Style.css';


function Header() {
    return (
        <header className="header">
            <img 
                src="/images/troll-face-0.png"
                className="header--image" 
            />
            <h2 className="header--title">MEME Genarator</h2>
            <h4 className="header--project">React Project 1</h4>
        </header>
    )
}

export default Header;
