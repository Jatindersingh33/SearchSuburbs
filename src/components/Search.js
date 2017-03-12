import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Row, Col, Grid } from 'react-bootstrap';
import _ from 'lodash';


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

    if (textValue.trim() == "") {
      e.preventDefault()
    }
    else {
      axios.get('/api/areas/'+ textValue)
          .then((response) => {
            this.setState({
              areas: response.data.areas
                      });
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

            <div className="row-center">
                <div className="col-xs-12 col-md-12">
                      {_.map(this.state.areas, (area, i) => {
                        return (
                                  <div className="col-is-4 col-md-3 col-sm-4 searchInput-resultContainer" key={i}>
                                    <div className="searchInput-resultItems">
                                      <div>
                                         <span className="searchInput-heading">Suburb Name:</span>
                                         <span>  {area.Suburb.replace('"','').replace('"','')}</span>
                                      </div>
                                      <div>
                                         <span className="searchInput-heading">Longitude:</span>
                                         <span>  {area.lon.replace('"','').replace('"','')}</span>
                                         </div>
                                         <div>
                                             <span className="searchInput-heading">Latitude:</span>
                                             <span>  {area.lat.replace('"','').replace('"','')}</span>
                                         </div>
                                         <div>
                                            <span className="searchInput-heading">State:</span>
                                         <span>  {area.State.replace('"','').replace('"','')}</span>
                                         </div>
                                         <div>
                                            <span className="searchInput-heading">Post Code:</span>
                                         <span>  {area.PostCode.replace('"','').replace('"','')}</span>
                                      </div>
                                    </div>
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
