import { React, useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Searchbox from '../SearchBox/Searchbox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';

const name = require('@rstacruz/startup-name-generator');

// class based
// class App extends React.Component {

//     name = require('@rstacruz/startup-name-generator');

//     // state provided by react
//     state = {
//         headerText: 'Name It!',
//         headerExpanded: true,
//         suggestedNames: []
//     }

//     handleInputChange = (keyword) => {
//         this.setState({
//             headerExpanded: !keyword,
//             suggestedNames: keyword ? this.name(keyword) : []
//         });

//     }

//     render() {
//         return (
//             <div>
//                 {/* passing props as headerTitle variable */}
//                 <Header headerExpanded={this.state.headerExpanded} headerTitle={this.state.headerText} />
//                 <Searchbox HandleInputChange={this.handleInputChange} />
//                 <ResultsContainer suggestedNames={this.state.suggestedNames} />
//             </div>
//         )
//     }
// }


// function based
const App = () => {

    const [headerText] = useState('Name It!');
    const [headerExpanded, setHeaderExpanded] = useState(true);
    const [suggestedNames, setSuggestedNames] = useState([]);


    const handleInputChange = (keyword) => {

        setHeaderExpanded(!keyword);
        setSuggestedNames(keyword ? name(keyword) : []);

    }

    return (
        <div>
            {/* passing props as headerTitle variable */}
            <Header headerExpanded={headerExpanded} headerTitle={headerText} />
            <Searchbox HandleInputChange={handleInputChange} />
            <ResultsContainer suggestedNames={suggestedNames} />
        </div>
    )
};

export default App;