import React, {PropTypes} from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';
import _ from 'lodash';

class MapContainer extends React.Component {

  render() {
    return (
      <section className="searchInput-MapScreen">
      <GoogleMapLoader
        containerElement={
          <div
            style={{
              height: `100%`
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: -33.855601, lng: 151.20822 }}

          >
          {_.map(this.props.areas, (a, i) => {
            let lat = parseFloat(a.lat.replace('"','').replace('"',''));
            let lon = parseFloat(a.lon.replace('"','').replace('"',''));
            return (
              <Marker key={i}
                position=  {{  lat : lat, lng : lon }}
                defaultAnimation={2}
              />
            )
          })}
          </GoogleMap>
        }
      />
    </section>
    )
  }
}

MapContainer.propTypes = {
  areas: PropTypes.array
}

export default MapContainer
