import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Searchbox from '../SearchBox/Searchbox';


// class based
class App extends React.Component {

    // state provided by react

    state = {
        headerText: 'Name It!'
    }

    render() {
        return (
            <div>
                {/* passing props as headerTitle variable */}
                <Header headerTitle={this.state.headerText} />
                <Searchbox />
            </div>
        )
    }
}


// function based
// function App() {
//     return <h1>this is my functional component</h1>
// }

export default App;