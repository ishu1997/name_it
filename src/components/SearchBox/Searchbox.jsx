import React from "react";
import './Searchbox.css';

const Searchbox = ({ HandleInputChange }) => {

    return (
        <div className="search-container">
            <input
                className="input-box"
                type="text"
                placeholder="Type your keyword here"
                onChange={(event) => {
                    HandleInputChange(event.target.value);
                }}
            ></input>
        </div>

    );

}

export default Searchbox;