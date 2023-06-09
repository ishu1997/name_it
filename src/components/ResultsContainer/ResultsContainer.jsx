
import React from "react";
import './ResultsContainer.css'
import NameCard from "../NameCard/NameCard";




const ResultsContainer = ({ suggestedNames }) => {


    const suggestedNamesJSX = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName + Date + (Math.random() * 100)} suggestedName={suggestedName} />
    })

    return (

        <div className="results-container">
            {suggestedNamesJSX}
        </div>

    );
}

export default ResultsContainer;