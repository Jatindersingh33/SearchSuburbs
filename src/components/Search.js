import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Row, Col, Grid } from 'react-bootstrap';
import _ from 'lodash';
import MapContainer from './map';


class Search extends React.Component {

  constructor() {
    super()
    this.getSuburbs = this.getSuburbs.bind(this)

    this.state = {};
  }
  componentDidMount() {

  }



  getSuburbs(e){
    let textValue = this.refs.searchArea.value;
    var result={};

    if (textValue.trim() == "") {
      e.preventDefault()
    }
    else {
      axios.get('/api/areas/'+ textValue)
          .then((response) => {
            this.setState({ areas: response.data.areas });
          })
          .catch(console.error)
    }
  }

  render(){

  return (
      <div className="text-center container">
            <div> Search by post code </div>
            <div className="row">
                    <input ref="searchArea"
                            type="text"
                            className="searchInput"
                            placeholder="Enter postcode"
                            autoComplete="off"
                    />
                <button className="btn" onClick={this.getSuburbs}>Go</button>
            </div>

            <div id="ResultMap" className="row-center">
                <div className="col-xs-12 col-md-12">
                   <MapContainer areas={this.state.areas} />
                  </div>
              </div>

      </div>
    )
  }
}

export default Search;
