import Header from './Header'
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  render(){
    return (
    <div className="App">
      <Header message="Search for Suburbs!" />
      <div>
      main content here--
      </div>
    </div>
    )
  }
}

export default App;
