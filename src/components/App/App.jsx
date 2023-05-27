import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Searchbox from '../SearchBox/Searchbox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';


// class based
class App extends React.Component {

    name = require('@rstacruz/startup-name-generator');

    // state provided by react
    state = {
        headerText: 'Name It!',
        headerExpanded: true,
        suggestedNames: []
    }

    handleInputChange = (keyword) => {
        this.setState({
            headerExpanded: !keyword,
            suggestedNames: keyword ? this.name(keyword) : []
        });

    }

    render() {
        return (
            <div>
                {/* passing props as headerTitle variable */}
                <Header headerExpanded={this.state.headerExpanded} headerTitle={this.state.headerText} />
                <Searchbox HandleInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        )
    }
}


// function based
// function App() {
//     return <h1>this is my functional component</h1>
// }

export default App;