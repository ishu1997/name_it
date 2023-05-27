import React from "react";
import './Searchbox.css';

const Searchbox = () => {

    return (
        <div className="search-container">
            <input
                className="input-box"
                type="text"
                placeholder="Type your keyword here"
            ></input>
        </div>

    );

}

export default Searchbox;