import React from "react"
import trollface from "../images/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={trollface} 
                className="header--image"
                alt="logo"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project"><a href="https://medium.com/@kumancev1" target="_blank">Join me</a></h4>
        </header>
    )
}