import Header from './Header';
import Search from './Search';
import MapContainer from './map';
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  render(){
    return (
    <div className="container">
      <Header message="Search for Suburbs!" />
      <Search  />

    </div>
    )
  }
}

export default App;
