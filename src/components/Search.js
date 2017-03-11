import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Row, Col, Grid } from 'react-bootstrap';
import _ from 'lodash';
import createFragment from 'react-addons-create-fragment';

class Search extends React.Component {

  constructor() {
    super()
    this.getSuburbs = this.getSuburbs.bind(this)
    this.state = {};
  }

 ComponentWillMount()
 {


 }

  getSuburbs(e){
    let textValue = this.refs.searchArea.value;
    var result={};
    axios.get('/api/areas/'+ textValue)
        .then((response) => {
          console.log(response.data.areas);
          this.setState({
            areas: response.data.areas
                    });
        });
      }
  //     .catch(console.error)
  //
  //   if (textValue == "") {
  //     e.preventDefault()
  //   }
  // }



  render(){
  return (
      <div className="text-center">
        <div> Search by post code </div>
        <div>
          <form method="get" autoComplete="off" onSubmit={this.getSuburbs}>
              <input ref="searchArea"
                      type="text"
                      className="searchInput"
                      placeholder="Search via postcode"
                      autoComplete="off"
                    />
            </form>
              <button onClick={this.getSuburbs}>Go</button>
        </div>

        <div className="container">

          <div className="row">
          {_.map(this.state.areas, (area, i) => {
            return (
                  <div>
                      <span>{area.lon}</span>
                      <span>{area.lat}</span>
                      <span>{area.Suburb}</span>
                      <span>{area.State}</span>,
                      <span>{area.PostCode}</span>
                  </div>
                )
          })}
          </div>
        </div>
    </div>
    )
  }
}

export default Search;
