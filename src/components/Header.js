import React from "react"
import trollface from "../images/troll-face.png"

export default function Header(props) {
    return (
        <header className={props.darkMode ? "header--dark": "header"}>
            <img 
                src={trollface} 
                className="header--image"
                alt="logo"
            />
            <h2 className="header--title">Meme Generator</h2>

            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </header>
    )
}