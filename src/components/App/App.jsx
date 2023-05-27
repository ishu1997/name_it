import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Searchbox from '../SearchBox/Searchbox';


// class based
class App extends React.Component {

    // state provided by react

    state = {
        headerText: 'Name It!',
        headerExpanded: true
    }

    handleInputChange = (keyword) => {
        this.setState({ headerExpanded: false });
        console.log(keyword);
        console.log(this.state.headerExpanded);
    }

    render() {
        return (
            <div>
                {/* passing props as headerTitle variable */}
                <Header headerExpanded={this.state.headerExpanded} headerTitle={this.state.headerText} />
                <Searchbox HandleInputChange={this.handleInputChange} />
            </div>
        )
    }
}


// function based
// function App() {
//     return <h1>this is my functional component</h1>
// }

export default App;