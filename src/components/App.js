import Header from './Header';
import Search from './Search';
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  render(){
    return (
    <div>
      <Header message="Search for Suburbs!" />
      <Search />
    </div>
    )
  }
}

export default App;
