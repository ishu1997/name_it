import React from "react";
import './Header.css'

// props are recieved as argument in header component
const Header = (props) => {
    return (
        <div className="head-container">
            <img className="head-image"
                src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
                alt="headerimage"></img>
            <h1 className="head-text">{props.headerTitle}</h1>
        </div>
    )
}

export default Header;